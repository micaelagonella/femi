
/*INICIO Logica para crear la cruz del menu burguer*/

const burguer = document.querySelector(".btn");
const linea1 = document.querySelector(".linea1");
const linea2 = document.querySelector(".linea2");
const linea3 = document.querySelector(".linea3");

burguer.addEventListener("click", lineaAnimada);

function lineaAnimada(){
    linea1.classList.toggle("linea1active");
    linea2.classList.toggle("linea2active");
    linea3.classList.toggle("linea3active");
    document.body.classList.toggle("scroll-none");
}

/*FIN Logica para crear la cruz del menu burguer*/

/*INICIO alerta de descargable*/
const alertNoContent = document.querySelector("#alert");

alertNoContent.addEventListener('click', function(){
    Swal.fire({
        title:'Sección en construcción',
        text: 'Próximamente disponible',
        icon: 'info',
        iconColor: '#4FAC24',
        confirmButtonText: '¡OK!',
        confirmButtonColor: '#4FAC24',
        color: '#874F9D',
        background: '#D3E4CD',
        showCloseButton: true,
        closeButtonColor: '#4FAC24'
    })
})
/*FIN alerta de descargable*/

/*INICIO menú fijo*/

// Cuando se haga scroll en la pagina se ejecuta la funcion
window.onscroll = function() {posicionDeFijado()};

// agrego y saco la clase donde declaro la posicion que quiero que tenga (fixed) cuando hago scroll
// var x= window.matchMedia("(min-width: 800px)");

function posicionDeFijado() {
    
// agarro el menu que quiero fijar y obtengo la posicion del margen superior del elemento a fijar
    const menu = document.getElementById("menu");
    let fixed = menu.offsetTop; 

    if ((window.pageYOffset > fixed) && (window.matchMedia("(min-width: 800px)").matches)) {
    menu.classList.add("fixed");
    } else {
    menu.classList.remove("fixed");
    }
}

/*FIN menú fijo*/

/*INICIO logica para que aparezca el mensaje de gracias por suscribirte cuando hago click en el boton*/

let toggle = document.querySelector('#toggle');
const sub = document.querySelector('.sub');
const thanks = document.querySelector('.thanks')

    toggle.addEventListener('click', function(){
        console.log(toggle.checked);
        if(toggle.checked == true){
            sub.style.opacity = '0';
            thanks.style.opacity = '1';
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc8VqwFJJlAEAxdl2mF-Wn6zLK8KfPBBio-UiVipJTwvLGVhA/viewform";
        }else if(toggle.checked == false){
            sub.style.opacity = '1';
            thanks.style.opacity = '0';
        }
        });

/*FIN logica para que aparezca el mensaje de gracias por suscribirte cuando hago click en el boton*/

