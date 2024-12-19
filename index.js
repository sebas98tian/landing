// alert(234)
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }

  // Función para verificar si todas las imágenes y GIFs han cargado
  function checkImages() {
    const mediaElements = document.querySelectorAll('img'); // Seleccionamos todas las imágenes y GIFs
    let mediaLoaded = 0;

    // Comprobar si cada imagen o gif se ha cargado
    mediaElements.forEach((media) => {
      if (media.complete) {
        mediaLoaded++;
      } else {
        media.onload = () => {
          mediaLoaded++;
          if (mediaLoaded === mediaElements.length) {
            hideLoader(); // Ocultar el loader cuando todas las imágenes y GIFs estén cargados
          }
        };
      }
    });

    // Si todas las imágenes o GIFs ya están cargados (por si alguna ya estaba en caché)
    if (mediaLoaded === mediaElements.length) {
      hideLoader();
    }
  }

  // Ejecutar la función cuando el DOM esté listo
  window.onload = checkImages;





// PRUEBA
function toggleAnswer(id) {
    const answer = document.getElementById(id);

    // Si está colapsado, expande
    if (answer.style.height === '0px' || answer.style.height === '') {
        answer.style.height = answer.scrollHeight + 'px';
    } else {
        answer.style.height = '0';
    }
}




// VARIABLES PARA LA LOGCA DEL CARRUSEL
let product_images=document.querySelectorAll(".images");
let image_principal=document.getElementById("image_principal");
let parent_images=document.querySelectorAll(".carrusel_img");
let parent_image;
let contador=0;

// VARIABLES PARA LA LOGICA DE ESPECIFICACIONES
let benep=document.querySelectorAll(".benep")
let boxBenep=document.getElementById("boxBenep");
let textBen=document.getElementById("text_ben");
let textEsp=document.getElementById("text_esp");

// LOGICA DEL CARRUSEL
for(let i=0; i<product_images.length; i++){
    product_images[i].addEventListener("click",()=>{
        if(contador!=0){
            parent_image.classList.remove("js-carrusel_img");
        }else if(contador==0){
            product_images[0].parentNode.classList.remove("a");
        }
        image_principal.src=product_images[i].src;
        product_images[i].parentElement.classList.add("js-carrusel_img");
        parent_image=product_images[i].parentElement;
        contador++;
    })
}

// LOGICA DE LAS ESPECIFICACIONES Y BENEFICIOS
for(let i=0; i<2; i++){
    benep[i].addEventListener("click",()=>{
        if(benep[i].title=="ben"){
            benep[i].classList.add("js-benep");
            benep[i+1].classList.remove("js-benep");
            textEsp.style.display="none";
            textBen.style.display="block";
        }else{
            benep[i].classList.add("js-benep");
            benep[i-1].classList.remove("js-benep");
            benep[i-1].classList.remove("bene2");
            textBen.style.display="none";
            textEsp.style.display="block";
        }
    })
}
