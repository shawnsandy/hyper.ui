console.log('app.js has loaded!')

// let test = new TestClass();
import { u } from "umbrellajs";
import { setTimeout } from "timers";
const validate = require("validate");
const smoothScroll = require("smooth-scroll");

validate.init();
const scroll = new smoothScroll('a[href*="#"]');

/** scroll to top */
const screenHeight = window.innerHeight;
const toTop = u(".back-to-top");

window.addEventListener('scroll', (e) => {
  if(window.pageYOffset > screenHeight){
   u(toTop).removeClass("elm-hide");
 } else {
   u(toTop).addClass("elm-hide");
 }
});

/**
 * Confirm actions before submit
 * Prompt user before deleting data
 */
u(".confirm-actions").each((elm, i) => {

  if(elm)
  {

    // grab the default element html value
    const val = u(elm).html();
    //console.log(val);

    // listen for the click event
    u(elm).on("click", (e) => {
      // set the confirmation value
      // search for data-confirm-html attribute
      // or defaults to confirm
      const confirmation = u(elm).data('confirm-html') || "confirm";

      // check if element html value is the same as the confirmation
      // if is reset to original value else set to confirmation
      // sets a 5 second timeout for user to respond
      // or reset the element to original value
      if (confirmation === u(elm).html()) {
        u(elm).html(val);
      } else {
        u(elm).html(confirmation);
        setTimeout(() => {
          u(elm).html(val);
        }, 5000);
        e.preventDefault();
      }

    });
  }

});
