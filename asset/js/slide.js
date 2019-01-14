/**
 * 
 *  jQuery Simple Slide
 * 
 * 
 * 
 */
var _slide = _slide || {
    x_position: '', current_slide: 0, first: 0,
    s_width: '', s_length: '', numbers: 0, tempo: 0,
    run: {},
    set_animation: {},
    s_navi_current: {},
    s_message: {},
    put_message: {},
    s_navi: {}
};

var slide = _slide;

_slide.run = function (_array) {

    Object.keys(_array).forEach(function (key) {
        console.log(key, _array[key]);
        _slide[key] = _array[key];

    });

    $(window).on('load resize', function () {

        _slide.s_width = $("#slide-contains").width();

        _slide.s_length = $("img.slide-data").length;

        $(".slide-row").width(_slide.s_width * _slide.s_length);

        $("img.slide-data").width(_slide.s_width);

        _slide.x_position = -(_slide.current_slide * _slide.s_width);

        $(".slide-row").animate({ "margin-left": _slide.x_position }, 0);

        if (_slide.first == 0) {
            // Slide Navi make
            for (let index = 0; index < _slide.s_length; index++) {
                _slide.s_navi(index);
            }
            // Slide Message make
            _slide.s_message();
            _slide.put_message(_slide.current_slide);
        }
        _slide.first = 1;

        _slide.set_animation();
    });

}


$(window).on('load', function () {
    $("#s_button .before").on("click", function () {

        if (_slide.current_slide > 0) {
            _slide.x_position = _slide.x_position + _slide.s_width;
            $(".slide-row").animate({ "margin-left": _slide.x_position }, 500);
            _slide.current_slide--;
            _slide.s_navi_current(_slide.current_slide);

        }

    })

    $("#s_button .next").on("click", function () {

        if (_slide.current_slide < (_slide.s_length - 1)) {
            _slide.x_position = _slide.x_position - _slide.s_width;
            $(".slide-row").animate({ "margin-left": _slide.x_position }, 500);
            _slide.current_slide++;
            _slide.s_navi_current(_slide.current_slide);
        }

    })
})


_slide.s_navi_current = function (num) {

    $("#slide-thumbnail li").removeClass("current");
    $("#navi-" + (num)).addClass("current");
    _slide.put_message(num);

}

_slide.s_navi = function (num) {

    _template = "<li id='navi-" + num + "'>" + (num+1) + "</li>";

    $("#slide-thumbnail").append(_template);
    $("#navi-" + num).on("click", function () {

        _slide.x_position = -(_slide.s_width * num)
        $(".slide-row").animate({ "margin-left": -(_slide.s_width * num) }, 500);
        _slide.s_navi_current(num);
        _slide.current_slide = num;

    });

    if (_slide.numbers == 0) {
        $("#navi-" + (_slide.numbers)).addClass("current");
    }

}

_slide.s_message = function () {
    message_list = $(".slide-message li");
}

_slide.put_message = function (num) {
    $("#slide-message-view").html(message_list[num]);
}


// slide animation
_slide.set_animation = function () {

    if(_slide.tempo > 0){
        setInterval(function () {

            _slide.numbers = _slide.current_slide;

            _slide.numbers++;
            if (_slide.numbers >= _slide.s_length) { _slide.numbers = 0 }

            _slide.x_position = -(_slide.s_width * _slide.numbers)

            $(".slide-row").animate({ "margin-left": -(_slide.s_width * _slide.numbers) }, 500);
            _slide.s_navi_current(_slide.numbers);

            _slide.current_slide = _slide.numbers;

        }, _slide.tempo);
    }
}


