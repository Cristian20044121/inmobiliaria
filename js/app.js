document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".animation-header");
  
    for (var i = 0; i < reveals.length; i++) {
        // Agrega una clase 'slide-right' a cada elemento
        reveals[i].classList.add("slide-right");
        
    }
})







/**
 * Animación de la sección número dos
*/

const fuctionAnimationScroll = () => {
    const reveals = document.querySelectorAll(".animation");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", fuctionAnimationScroll);
  
