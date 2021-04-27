//PARA ACTIVAR LOS EVENTOS:
//EVENTO QUE SE ESCRIBA "CLICK" CADA VEZ QUE SE DA CLIC CON EL MOUSE EN UN ELEMENTO HTML
let clicks = document.querySelectorAll("td");
clicks.forEach(function(click) {
    click.addEventListener('click',function(){
        console.log(this);})
});

//OBTENER TODOS LOS ELEMENTOS DE LA CLASE CIERRE
let cierres = document.querySelectorAll(".cierre");

//AGREGAR UN EVENTO CLICK A CADA UNO DE ELLOS
cierres.forEach(function(cierre) {
    cierre.addEventListener('click',function(
        //42 COMPORTAMIENTO POR DEFECTO
        ev        
    ){
        console.log("VAYAAAAAAAAAA");
        ev.preventDefault(); //1RA FORMA: MEDIANTE EL METODO DE LA CLASE
        
        //43. NUEVO EJEMPLO DE AGREGAR O QUITAR CLASES
        let contenedor = document.querySelector(".content");

        //SE QUITARA LAS CLASES DE ANIMACION AL CONTENT O CLASE container
        contenedor.classList.remove("animate__animated");
        contenedor.classList.remove("animate__swing");

        //LUEGO SE AGREGARA CLASES PARA ANIMAR SU SALIDA, ES DECIR AL MOMENTO DE CERRAR HAYA UNA NUEVA ANIMACION
        contenedor.classList.add("animate__animated");
        contenedor.classList.add("animate__fadeOut");

        //44. TIMER
        //EL SEGUNDO PARAMETRO ESTA EN MILISEGUNDOS, POR ELLO 1 SEG = 1000
        setTimeout(function(){
            location.href = "../index.html";
        },1000);

        return false;
    })
});
