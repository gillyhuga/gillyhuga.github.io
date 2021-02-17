var scrolled=0;
    $(document).ready(function() {
        var text = $(".text");

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll >=300){
            text.removeClass("hidden");
            
        }
        else{
            text.addClass("hidden")
        }
    });


		$("#project").on("click" ,function(){
            scrolled=scrolled+300;
    
            $(".main").animate({
                    scrollTop:  scrolled
               });

    });
 });

    