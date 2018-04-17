$(function(){
    $(".box-azul").click(function(){


        var tam = $(this).css("width");

        var mod = {};

        if (tam == "100px")
        {        
        mod.width = "200px";
        } else {        

            mod.width = "100px";
            }



        $(this).animate(mod); 
           
       

    });

    $("#btn-vai").click(function(){
        $(".box-azul").slideToggle();

    });



    $(".box-verde").click(function(){ 
        
        var left = $(document).width();

        

        var css = {
            "left": left - 120
        };
        $(this).animate(css, 1584);
            
        }); 

    $(document).keydown(function(ev){

        var left = parseInt($(".box-pink").css("left"));

        if (left >= 0)
        {        

        if (ev.keyCode == 39){    

        var css = {
            "left": "+=10" 
        };        
    } else if(ev.keyCode == 37)
    {
        var css = {
            "left": "-=10" 
        };

    } 

    $(".box-pink").animate(css, 100);
        }

    });    
    
    $(document).mousemove(function(ev){

        $(".box-gold").css("left", ev.clientX);
    
    });
       



});
