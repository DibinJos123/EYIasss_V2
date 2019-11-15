jQuery(function ($) {
    'use strict';

  /* ----------------------------------------------------------- */
  /*  Toggle View
  /* ----------------------------------------------------------- */

  $('#industryToggle').click(function() {

    console.log("Industry Toggle")
    // if ($(this).val() == "play") {
    //    $(this).val("pause");
    //    play_int();
    // }
    // else {
    //    $(this).val("play");
    //   play_pause();
    // }
    if(document.getElementById("industryTreeView").style.display == "" || document.getElementById("industryTreeView").style.display == 'inline')
    {
    document.getElementById("industryTreeView").style.display = "none";
    }
    else if(document.getElementById("industryTreeView").style.display == "none")
    {
      document.getElementById("industryTreeView").style.display = "";
    }
 });

});