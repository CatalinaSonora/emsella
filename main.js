


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
            statusElm.append('<div id="validacion">Por favor, ingrese un E-Mail válido.</div>')
            
        }

        if(nombre.length >= 2) {
            
        } else {
            event.preventDefault()
            statusElm.append('<div id="validacion">Por favor, ingrese un nombre válido.</div>')
        }

        if(mensaje.length >= 5) {
            
        } else {
            event.preventDefault()
            statusElm.append('<div id="validacion">Por favor, ingrese al menos 5 caractéres.</div>')
        }

        
    })
})

if ($('.enviar') = true {
    statusElm.append('<div id="validacion">Formulario enviado con éxito..</div>')
}

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