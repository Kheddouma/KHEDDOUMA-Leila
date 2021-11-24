/********************main start */

// No JavaScript needed my friend !

// Below code only for demo purposes
// You can remove the `&.hover,` class from the CSS
// if you don't need it (line no. 55)
$(document).ready(function() {
    var count = 0;
    var contenue = $(".block");
  
    var testEffect = setInterval(function() {
      $(contenue[count - 1]).removeClass("hover");
      $(contenue[count]).addClass("hover");
      count++;
      if (count > 4) clearInterval(testEffect);
    }, 800);
  });

  /********************main end*/


  /********************************NeoMode start **********************************
  var toggleDarkMode = () => {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  };
  /********************************NeoMode end********************************/
 