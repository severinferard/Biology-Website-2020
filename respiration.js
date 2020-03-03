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

      var blocks = document.getElementsByClassName("block");
      for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].getBoundingClientRect().top < 450) {
          blocks[i].style.opacity = "1";
        } else {
          blocks[i].style.opacity = "0";
        }
        if (blocks[i].getBoundingClientRect().bottom < 200) {
          blocks[i].style.opacity = "0";
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
      var pos = 40 - (window.scrollY / Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight)) * 100 * 15.5;
      document.getElementById("back-image-respiration").style.backgroundPosition = "0 " + pos + "%";

    //   if (document.getElementsByClassName("circle-menu-respi")[0].getBoundingClientRect().top < 400) {
    //     document.getElementsByClassName("circle-menu-respi")[0].style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 19%, rgba(0,212,255,1) 100%);"
    //     var courses =this.document.getElementsByClassName("cours")
    //     for (var i = 0; i < courses.length; i++){
    //       courses[i].style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 19%, rgba(0,212,255,1) 100%);"
    //     }
    //   } else {
    //     document.getElementsByClassName("circle-menu-respi")[0].style.backgroundColor = "white"
    //     var courses =this.document.getElementsByClassName("cours")
    //     for (var i = 0; i < courses.length; i++){
    //       courses[i].style.backgroundColor = "white"
    //   }
    // }

    };
  
    var ill = document.getElementsByClassName("illustration");
    console.log(ill);
    
    for (var i = 0; i < ill.length; i++) {
      
      
      ill[i].onmouseenter = function() {
        console.log("illustration");
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
  
    document.getElementById("circle-amphibians-respi").onclick = function() {
      showCourses("cours-amphibians-respi");
    };
    document.getElementById("circle-birds-respi").onclick = function() {
      showCourses("cours-birds-respi");
    };
    document.getElementById("circle-insects-respi").onclick = function() {
      showCourses("cours-insects-respi");
    };
    document.getElementById("circle-fishs-respi").onclick = function() {
      showCourses("cours-fishs-respi");
    };
  
    document.getElementById("up-arrow").onclick = function() {
      document.getElementsByClassName("circle-menu")[0].scrollIntoView({
        behavior: "smooth"
      });
    };
  

    particlesJS.load('particles-js', 'particles.json');
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    document.getElementById("particles-js").style.height = height + "px"
    console.log(height);
    

    var menuBubbles = document.getElementsByClassName("circles")
    
    
  //   var h = setInterval(function () {
      
  //     for (let i = 0; i < menuBubbles.length; i++) {
  //       menuBubbles[i].style.transition = "2s "
  //       var distX = Math.floor(Math.random()*50) + 1; 
  //       var distY = Math.floor(Math.random()*50) + 1; 
  //       distX *= Math.floor(Math.random()*2) == 1 ? 1 : -1; 
  //       distY *= Math.floor(Math.random()*2) == 1 ? 1 : -1; 

  //       menuBubbles[i].style.transform = "translate("+ distX+"px, "+ distY+"px)";
  //       console.log(menuBubbles[i].style.transform);
        
        
  //     }
  //  }, 1000)


  });
  


    
    