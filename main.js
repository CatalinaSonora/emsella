


$(document).ready(function () {
    $('.enviar').click(function (event){
        event.preventDefault()
        console.log ('clickee')

        let email = $('.email').val()
        let persona = $('.persona').val()
        let mensaje = $('.mensaje').val()
        let statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email Valido</div>')
            
        } else {

            event.preventDefault()
            statusElm.append('<div>Email no Valido</div>')
            
        }

        if(persona.length > 5) {
            statusElm.append('<div>Email Valido</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email no Valido</div>')
        }

        if(mensaje.length > 5) {
            statusElm.append('<div>Email Valido</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email no Valido</div>')
        }

        
    })
})


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