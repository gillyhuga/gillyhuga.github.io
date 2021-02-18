var scrolled=0;
    $(document).ready(function() {
        var text = $(".text");
        //var footer = $(".footer__icon");

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll >=10){
            text.removeClass("hidden");
            //footer.removeClass("footertop");
        }
        else{
            text.addClass("hidden")
            //footer.removeClass("footertop");
        }
    });
 });

    