

/*-----------------------------------------------------------------------------------

 Template Name:Bigdeal
 Template URI: themes.pixelstrap.com/bigdeal
 Description: This is E-commerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */


(function($){
    $(document).ready(function(){

    $('#mobilemenu').meanmenu({
         meanScreenWidth: "767",
         meanMenuContainer: '.mobilemenu'
     });


    //sticky header active
    $(window).on('scroll',function(){
       let scroll = $(window).scrollTop();
       if(scroll < 200){
          $('.sticky-header').removeClass('sticky');
       }else{
          $('.sticky-header').addClass('sticky');
    }});
    
     
    

    // WOW js active
    new WOW().init();


    });
})(jQuery)