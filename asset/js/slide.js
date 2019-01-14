(function ($) {

    var x_position = 0, current_slide = 0, first = 0;
    var s_width, s_length;

    $(window).on('load resize', function () {

        s_width = $("#slide-contains").width();

        s_length = $("img.slide-data").length;

        $(".slide-row").width(s_width * s_length);

        $("img.slide-data").width(s_width);

        x_position = -(current_slide * s_width);

        $(".slide-row").animate({ "margin-left": x_position }, 0);

        if (first == 0) {
            // Slide Navi make
            for (let index = 0; index < s_length; index++) {
                s_navi(index);
            }
            // Slide Message make
            s_message();
            put_message(current_slide);
        }
        first = 1;

    });

    $(window).on('load',function(){
        $("#s_button .before").on("click", function () {

            if (current_slide > 0) {
                x_position = x_position + s_width;
                $(".slide-row").animate({ "margin-left": x_position }, 500);
                current_slide--;
                s_navi_current(current_slide);

            }

        })

        $("#s_button .next").on("click", function () {

            if (current_slide < (s_length - 1)) {
                x_position = x_position - s_width;
                $(".slide-row").animate({ "margin-left": x_position }, 500);
                current_slide++;
                s_navi_current(current_slide);
            }

        })
    })


    function s_navi_current(numbers) {

        $("#slide-thumbnail li").removeClass("current");
        $("#navi-" + (numbers)).addClass("current");
        put_message(numbers);

    }

    function s_navi(numbers) {

        _template = "<li id='navi-" + numbers + "'>" + numbers + "</li>";

        $("#slide-thumbnail").append(_template);
        $("#navi-" + numbers).on("click", function () {

            x_position = -(s_width * numbers)
            $(".slide-row").animate({ "margin-left": -(s_width * numbers) }, 500);
            s_navi_current(numbers);
            current_slide = numbers;

        });

        if (numbers == 0) {
            $("#navi-" + (numbers)).addClass("current");
        }

    }

    function s_message(){
        message_list = $(".slide-message li");
        console.log(message_list);
    }

    function put_message(num){
        $("#slide-message-view").html(message_list[num]);
    }


    // slide animation
    numbers = 0;
    setInterval(function(){

        numbers ++ ;        
        if(numbers > 2){numbers=0}
        
        x_position = -(s_width * numbers)

        $(".slide-row").animate({ "margin-left": -(s_width * numbers) }, 500);
        s_navi_current(numbers);

        current_slide = numbers;
    },3000);


}(jQuery))