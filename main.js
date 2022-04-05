AOS.init({
  duration: 1000,
  once: false, 
  mirror: true,
});

const nav = document.querySelector("#navbar");
const NavTop = nav.offsetTop;

function fixnavbar(){
  if(window.scrollY >= NavTop){
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  }else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixnavbar);


document.getElementById("boton").onclick = function () {
  location.href = "https://wa.me/59892900020";
};

window.addEventListener('scroll', aparece);
function aparece () {
  let aparecer = $('.aparece')
  for(let i = 0; i<aparecer.length; i++){
    let windowheight = window.innerHeight;
    let aparecetop = aparecer[i].getBoundingClientRect().top;
    let aparecepoint = 150;

    if(aparecetop < windowheight - aparecepoint){
      aparecer[i].classList.add('active');

    } 
    else {
      aparecer[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', flip);
function flip () {
  let flip = $('.flip')
  for(let i = 0; i<flip.length; i++){
    let windowheight = window.innerHeight;
    let aparecetop = flip[i].getBoundingClientRect().top;
    let aparecepoint = 150;

    if(aparecetop < windowheight - aparecepoint){
      flip[i].classList.add('active_2');

    } 
    else {
      flip[i].classList.remove('active_2');
    }
  }
}

$(document).ready(function () {
    $('.enviar').click(function (event){
        event.preventDefault()
        console.log ('clickee')

        let email = $('.email').val()
        let nombre = $('.nombre').val()
        let apellido = $('.apellido').val()
        let mensaje = $('.mensaje').val()
        let statusElm = $('.status')

        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
           
            
        } else {

            event.preventDefault()
            $(document).ready(function() {
              $(".email").css("border", "2px solid #b80d1b");
          });
            
        }

        if(nombre.length >= 2) {
            
        } else {
            event.preventDefault()
            $(document).ready(function() {
              $(".nombre").css("border", "2px solid #b80d1b");
          });
        }

        if(mensaje.length >= 5) {
            
        } else {
            event.preventDefault()
            $(document).ready(function() {
              $(".mensaje").css("border", "2px solid #b80d1b");
          });
        }
        
        
    })
})


