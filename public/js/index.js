$(document).ready(function(){
    $('#menubar').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menubar').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop()>0){
            $(".top").show();
        }
        else{
            $(".top").hide();
        }
    });
    $(".fa-times-circle").click(function(){
        $("div").remove(".alert");
    });
    $('a[href*="#"]').on('click',function(event){
        event.preventDefault();
    
    $('html,body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },
    500 ,'linear');
});
});

// "bootstrap": "^5.1.0",