
/*
    @name: js.js
*/


( function () {

    menuToggle  =   function () {

      $('.menu-toggle').on("click", function () {


      $(".site-nav").toggleClass('site-nav--open', 500);
      $(this).toggleClass('open');

      }); //menBox


    };



    init = function () {

        menuToggle();

    };


    window.addEventListener("load", init)
    ;
})();