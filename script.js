function isElementInViewport(el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /*or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

document.addEventListener("DOMContentLoaded", function(e) {

    window.onscroll = function() {
        if (document.getElementById("fixed-quote").style.opacity = "1") {
            document.getElementById("fixed-quote").style.opacity = "0";
            setTimeout(function() {document.getElementById("fixed-quote").style.display = "none"}, 1000);
            
        }

        if (isElementInViewport(document.getElementsByClassName("intro-txt")[0])){
            console.log("test")
            document.getElementsByClassName("intro-txt")[0].style.backgroundColor = " rgb(199, 119, 252)"
     
        }

    }

    var pannel1Color = document.getElementsByClassName("color-1")[0].style.backgroundColor
    var pannel2Color = document.getElementsByClassName("color-2")[0].style.backgroundColor
    var pannel3Color = document.getElementsByClassName("color-3")[0].style.backgroundColor
    var pannel4Color = document.getElementsByClassName("color-4")[0].style.backgroundColor

    function fill(element) {

        var num = element.classList[1][element.classList[1].length - 1];

        var pannels = document.getElementsByClassName("pannel");
        for (var i = 0; i < pannels.length; i++) {
            pannels[i].style.width = "10%"
        };
        element.style.width = "70%";
        document.getElementsByClassName("color-" + num)[0].style.opacity = "0";
        document.getElementsByClassName("title-" + num)[0].style.top = "10";
        document.getElementsByClassName("title-" + num)[0].style.fontSize = "72"

    }

    function unfill(element) {
        console.log("out");
        var num = element.classList[1][element.classList[1].length - 1];

        var pannels = document.getElementsByClassName("pannel");
        for (var i = 0; i < pannels.length; i++) {
            pannels[i].style.width = "25%"
        };

        document.getElementsByClassName("color-" + num)[0].style.opacity = "1";
        document.getElementsByClassName("title-" + num)[0].style.top = "50%";
        document.getElementsByClassName("title-" + num)[0].style.fontSize = "48"
    }

    var pannels = document.getElementsByClassName("pannel");
    var pannelColors = document.getElementsByClassName("pannel-color");
    for (var i = 0; i < pannels.length; i++) {
        pannels[i].onmouseenter = function() {
            fill(this);
        };
        pannels[i].onmouseleave = function() {
            unfill(this);
        };
    }


    for (var i = 0; i < pannels.length; i++) {

    }

    particlesJS.load('fixed-quote', 'quote-particles.json');



})