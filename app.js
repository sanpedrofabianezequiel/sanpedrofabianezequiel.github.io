var idLinkedin= document.querySelector("#idLinkedin")
idLinkedin.addEventListener('click',(e) => { location.href= "https://www.linkedin.com/in/ezequiel-san-pedro-24439b17b/" })

var urlAppWeb= document.querySelector("#urlAppWeb")
urlAppWeb.addEventListener('click',(e) => { location.href= "https://github.com/sanpedrofabianezequiel/Biblioteca-App-Web"})

var idAndroid= document.querySelector("#idAndroid")
idAndroid.addEventListener('click',(e) => { location.href= "https://github.com/sanpedrofabianezequiel/Beer-shop"})

var idJavaProcesador= document.querySelector("#idJavaProcesador")
idJavaProcesador.addEventListener('click',(e) => { location.href= "https://github.com/sanpedrofabianezequiel/ProcesadorDeTextos"})

var idIconos= document.querySelectorAll(".sPequeña");

idIconos.forEach(   x => {
    x.addEventListener('click', function () {  location.href= "https://www.linkedin.com/in/ezequiel-san-pedro-24439b17b/" }) 
});

var urlPong=document.querySelector('#urlPong')

urlPong.addEventListener('click',function () {
    location.href="https://github.com/sanpedrofabianezequiel/Pong.git"
  })

