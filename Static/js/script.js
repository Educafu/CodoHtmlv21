document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todos los elementos del slider
    const sliderBox = document.querySelector(".slider-box");
    const slides = sliderBox.querySelectorAll("ul li");
    let currentSlide = 0;
    
    // Función para mostrar el siguiente slide
    function showNextSlide() {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }
    
    // Inicializa el slider
    slides[currentSlide].style.display = "block";
    
    // Cambia de slide cada 5 segundos
    setInterval(showNextSlide, 5000);
  });
  