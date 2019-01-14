
var _slide = _slide || {
    _setting : '',
    run : {},
    s_navi_current :{},
    s_message: {},
    put_message: {},
    s_navi: {}
};

var slide = _slide;

var x_position = 0, current_slide = 0, first = 0;
var s_width, s_length,numbers=0;

_slide.run = function(){


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
                _slide.s_navi(index);
            }
            // Slide Message make
            _slide.s_message();
            _slide.put_message(current_slide);
        }
        first = 1;

    });

}


    $(window).on('load',function(){
        $("#s_button .before").on("click", function () {

            if (current_slide > 0) {
                x_position = x_position + s_width;
                $(".slide-row").animate({ "margin-left": x_position }, 500);
                current_slide--;
                _slide.s_navi_current(current_slide);

            }

        })

        $("#s_button .next").on("click", function () {

            if (current_slide < (s_length - 1)) {
                x_position = x_position - s_width;
                $(".slide-row").animate({ "margin-left": x_position }, 500);
                current_slide++;
                _slide.s_navi_current(current_slide);
            }

        })
    })


    _slide.s_navi_current = function(numbers) {

        $("#slide-thumbnail li").removeClass("current");
        $("#navi-" + (numbers)).addClass("current");
        _slide.put_message(numbers);

    }

    _slide.s_navi = function(numbers) {

        _template = "<li id='navi-" + numbers + "'>" + numbers + "</li>";

        $("#slide-thumbnail").append(_template);
        $("#navi-" + numbers).on("click", function () {

            x_position = -(s_width * numbers)
            $(".slide-row").animate({ "margin-left": -(s_width * numbers) }, 500);
            _slide.s_navi_current(numbers);
            current_slide = numbers;

        });

        if (numbers == 0) {
            $("#navi-" + (numbers)).addClass("current");
        }

    }

    _slide.s_message = function(){
        message_list = $(".slide-message li");
        console.log(message_list);
    }

    _slide.put_message = function(num){
        $("#slide-message-view").html(message_list[num]);
    }


    // slide animation
    setInterval(function(){

        numbers ++ ;        
        if(numbers > 2){numbers=0}
        
        x_position = -(s_width * numbers)

        $(".slide-row").animate({ "margin-left": -(s_width * numbers) }, 500);
        _slide.s_navi_current(numbers);

        current_slide = numbers;
    },3000);



