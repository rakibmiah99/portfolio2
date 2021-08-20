$(document).ready(function(){
   $(this).scroll(function(){
        let top = $(this).scrollTop();
        if(top > 500){
            $('#menu').slideDown();
            $('#menu').css({
                "position": "sticky",
                "top":"0",
                "box-shadow":"0 1px 8px #ccc",
                
            });
            $('#menu').addClass('bg-light');
            $('#menu').removeClass('bg-dark');
            $('#menu a').addClass('text-dark');

        }else{
            $('#menu').css({
                "box-shadow":"none",
                "position": "static"
            });
            $('#menu').addClass('bg-dark');
            $('#menu').removeClass('bg-light');
            $('#menu a').removeClass('text-dark');
        }
   })



   //service 
    //services 
    $('#services .cards .card .card-body').mouseenter(function(){
        
        let container = $(this).children().eq(1);
        container.animate({
            bottom: "400px",
        })
    });
    //mouse leave 
    $('#services .cards .card .card-body').mouseleave(function(){
        //let bg = $(this).children().eq(0);
        let container = $(this).children().eq(1);
        container.animate({
            bottom: "13.5px"
        })
    });




    //owl carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        loop: true,
        autoplay: true,
    })
})