


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


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}