$(document).ready(function(){
    var scrolled=0;
            
        $("#downClick").on("click" ,function(){
                    scrolled=scrolled+300;
            
                    $(".page-container ").animate({
                            scrollTop:  scrolled
                       });
    
                });
    
        
        $("#upClick").on("click" ,function(){
                    scrolled=scrolled-300;
                    
                    $(".page-container ").animate({
                            scrollTop:  scrolled
                       });
    
                });
    
    
    $(".clearValue").on("click" ,function(){
                    scrolled=0;
            });
    
    
    });
    
    