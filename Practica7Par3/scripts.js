let slideIndex = 0;
showSlides();

function showSlides() { //funcion de slides o imagenes
  const slides = document.querySelectorAll('.carousel-content img');//Una lista para elementos sin numeracion
  
  for (let i = 0; i < slides.length; i++) {//Un ciclo que controla las imagenes que se van activando y desactivando segun su index o posicion de indice
    slides[i].classList.remove('active');
  }

  slideIndex++;
  
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  slides[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 2000); 
}
