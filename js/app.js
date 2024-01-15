

/**
 * Animación de carga para la sección de header
 */

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".animation-header");

  for (var i = 0; i < reveals.length; i++) {
    // Agrega una clase 'slide-right' a cada elemento
    reveals[i].classList.add("slide-right");

  }
})







/**
 * Animación de scroll en Y 
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



// menu hamburguesa

const menuHamburguesa = () => {
  const toggleButton = document.getElementById('toggleMenu');
  const navMenu = document.getElementById('navMenu');

  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
    toggleButton.classList.toggle('active');
  });
}
menuHamburguesa();


const navegacionAnclas = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

}

navegacionAnclas();


// modal 
const ModalLinks = () => {
  const buttonModal = document.querySelectorAll('.modal-open');

  for (let i = 0; i < buttonModal.length; i++) {
    buttonModal[i].addEventListener('click', function () {
      document.getElementById('miModal').style.display = 'block';
    });
  }
  document.getElementById('cerrarModal').addEventListener('click', function () {
    document.getElementById('miModal').style.display = 'none';
  });

  // Cerrar el modal si se hace clic fuera de él
  window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('miModal')) {
      document.getElementById('miModal').style.display = 'none';
    }
  });
}

ModalLinks();


