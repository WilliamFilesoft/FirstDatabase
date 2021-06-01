/***************************************************************************
*
* SCRIPT JS
*
***************************************************************************/

$(document).ready(function(){


    // Hover Button for All Pages
    $('.hoverJS').hover(function(){
        $(this).stop().fadeTo(100,0.8);
    },function(){
        $(this).stop().fadeTo(100,1);
    });
    

    //Click event to scroll to top
    $('.btn_up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
     $(".menu_sp").on("click", function(){

        $(".mainMenu").addClass( "show");
        $("body").addClass( "overlay");

    });
   
    $(".item").click(function(){
        $(this).children('.sub_menu').toggleClass("show1");
    });

    $(".menu_remove").on("click", function(){

        $(".mainMenu").removeClass( "show");
        $("body").removeClass( "overlay");

    });

    $(".list").click(function(){
        $(".mainul").toggleClass("show");
    });
       


});