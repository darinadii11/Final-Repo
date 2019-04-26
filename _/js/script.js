function Main() {

    this.showText = function(id) {
        var texts = $('.block .bottom-left');
        for(var i = 0; i < texts.length; i++) {
            var tmp = texts[i];
            if($(tmp).data('id') == id) {
                $(tmp).show();
            }
        }
    }

    this.imgBrightness = function(id, light) {
        var imgs = $('.block .hover img');
        for(var i = 0; i < imgs.length; i++) {
            var tmp = imgs[i];
            if($(tmp).data('id') == id) {
                if(light == true)
                    $(tmp).css({'filter': 'brightness(100%)'});
                else
                    $(tmp).css({'filter': 'brightness(30%)'});
            }
        }
    }

}

$(document).ready(function() {

    var main = new Main();

    $('#first').animate({
        width: "600px"
    }, 1000, function() {
        $('#before').css({'background': '#fff'});
    });

    $('#first').animate({
        opacity: "0"
    }, 500, function() {
        $('#before').hide();
        $('#after').css({'display': 'flex'});
    });

    $('#page-wrap').wrapInner("<table><tr>");
    $('.block').wrap("<td></td>");

    $('body').scroll(function(event, delta) {
        this.scrollLeft -= delta * 30;
        event.preventDefault();
    });

    var blocks = $('.block .hover');
    for(var i = 0; i < blocks.length; i++) {
        var tmp = blocks[i];
        $(tmp).children().data('id', i);
    }

    var hovers = $('.hover');
    for(var i = 0; i < hovers.length; i++) {
        var tmp = hovers[i];
        if(i%2 == 0)
            $(tmp).css({'margin-top': '200px'});
        else
            $(tmp).css({'margin-bottom': '200px'});
        
        if(i == hovers.length-1)
            $(tmp).css({'margin-right': '200px'});
    }

    $('.full-height').css({'margin-bottom': '0', 'margin-top': '0'});

    $('.block img').hover(function() {
        var id = $(this).data('id');
        main.showText(id);
        $(this).css({'filter': 'brightness(70%)'});
    }, function() {
        $(this).css({'filter': 'brightness(100%)'});
        $('.block .bottom-left').hide();
    });

    $('.block .bottom-left').hover(function() {
        var id = $(this).data('id');
        main.showText(id);
        main.imgBrightness(id, false);
    }, function() {
        var id = $(this).data('id');
        $('.block .bottom-left').hide();
        main.imgBrightness(id, true);
    });

    $('.block span.output-text').hover(function() {
        var id = $(this).data('id');
        main.showText(id);
        main.imgBrightness(id, false);
    }, function() {
        var id = $(this).data('id');
        $('.block .bottom-left').hide();
        main.imgBrightness(id, true);
    });

    $(window).scroll(function() {
        var index = $(document).scrollLeft();
        if(index >= 1100 && index <= 6699)
            $('body').css({'background-color': '#f7e6cf'});
        else if(index >= 6700 && index <= 12099)
            $('body').css({'background-color': '#c1b099'});
        else if(index >= 12100)
            $('body').css({'background-color': '#938470'});
        else
            $('body').css({'background-color': '#fff'});
    });

});