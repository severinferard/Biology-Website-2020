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
  
  function showCourses(id) {
    var courses = document.getElementsByClassName("cours");
    for (var i = 0; i < courses.length; i++) {
      courses[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  }
  
  document.addEventListener("DOMContentLoaded", function(e) {
    window.onscroll = function() {
      var ill = document.getElementsByClassName("illustration");
      for (var i = 0; i < ill.length; i++) {
        if (isElementInViewport(ill[i]) == true) {
          ill[i].style.transform = "scale(1.25)";
        } else {
          ill[i].style.transform = "scale(1)";
        }
      }
  
      var courses = document.getElementsByClassName("cours");
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].style.display != "none") {
          if (courses[i].getBoundingClientRect().top < 0) {
            document.getElementById("up-arrow").style.opacity = "1";
          } else {
            document.getElementById("up-arrow").style.opacity = "0";
          }
        }
      }
  
      if (
        document.getElementsByClassName("circle-menu")[0].getBoundingClientRect()
          .top > 0
      ) {
        var circles = document.getElementsByClassName("circles");
        for (var i = 0; i < circles.length; i++) {
          circles[i].style.webkitAnimationPlayState = "running";
        }
      }
  
      var pos =
        40 -
        (window.scrollY /
          Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          )) *
          100 *
          1.5;
      document.getElementById("back-image-heart").style.backgroundPosition =
        "0 " + pos + "%";
    };
  
    var ill = document.getElementsByClassName("illustration");
    for (var i = 0; i < ill.length; i++) {
      ill[i].onmouseenter = function() {
        for (var j = 0; j < this.childNodes.length; j++) {
          if (this.childNodes[j].className == "caption") {
            this.childNodes[j].style.visibility = "visible";
            this.childNodes[j].style.opacity = "1";
          }
        }
      };
      ill[i].onmouseleave = function() {
        for (var j = 0; j < this.childNodes.length; j++) {
          if (this.childNodes[j].className == "caption") {
            this.childNodes[j].style.display = "hidden";
            this.childNodes[j].style.opacity = "0";
          }
        }
      };
    }
  
    document.getElementById("circle-mammals").onclick = function() {
      showCourses("cours-mammals");
    };
    document.getElementById("circle-amphibia").onclick = function() {
      showCourses("cours-amphibia");
    };
    document.getElementById("circle-reptiles").onclick = function() {
      showCourses("cours-reptiles");
    };
    document.getElementById("circle-fishs").onclick = function() {
      showCourses("cours-fishs");
    };
  
    document.getElementById("up-arrow").onclick = function() {
      document.getElementsByClassName("circle-menu")[0].scrollIntoView({
        behavior: "smooth"
      });
    };
  
    document.getElementById("two-chambers-image").onload = function() {
      var div = document.getElementById("legend");
      div.style.position = "absolute";
  
      var twoChambersAreas = document.getElementsByName("two-chambers-map")[0]
        .areas;
      for (var i = 0; i < twoChambersAreas.length; i++) {
        twoChambersAreas[i].onmouseenter = function() {
          var legends = document.getElementsByClassName("two-chambers-legend");
          for (var j = 0; j < legends.length; j++) {
            if (legends[j].title == this.title) {
              var coord = legends[j].coords.split(",");
              div.style.left = coord[0] + "px";
              div.style.top = coord[1] + "px";
              div.innerText = legends[j].title;
            }
          }
        };
  
        twoChambersAreas[i].onmouseleave = function() {
          div.innerText = "";
        };
      }
    };
  });
  