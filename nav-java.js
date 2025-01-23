var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
  });
}

/*
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll").style.opacity = "0%";
  } else {
    document.getElementById("scroll").style.opacity = "100%";
  }
  prevScrollpos = currentScrollPos;
} */
/* diverse testen met java ivm scroll triggers, werkte niet
  document.addEventListener('scroll', function() {
    let image = document.getElementById('myImage');

    console.log( "Scroll Position:", window.scrollY)

    if (window.scrollY > 0) {
        console.log("Scroll detected, hiding image...")
        image.style.opacity = '0'; // Fade out
    } else {
    console.log("Scroll not detected yet.")
    }
});

$("myImage").css("opacity", "1").delay(500).animate({ opacity: "0" }, 400)
*/