/*console.log("Hola mundo, soy Jaison, llamando a javascript desde archivo")

//DOM
//QUERYSELECTOR SOLO OBTIENE EL PRIMER SELECTOR ENCONTRADO
//QUERYSELECTORALL TRAE TODOS LOS ELEMENTOS QUE ENCUENTRE
let contenedor = document.querySelector(".title");
console.log(contenedor);

//QUERYSELECTORALL, YA NO ES UN ELEMENTO HTML SINO DE NODO O LISTA (NODELIST)
let links = document.querySelectorAll("a");
console.log(links);

//EN LA VISTA NODO, LOS VALORES SON MUY TECNICOS, PARA PODER MOSTRAR EN SU FORMA DE HTML, SE DEBE RECORRER EL NODO
links.forEach(function(link){
    console.log(link);
})
*/

//PARA ACTIVAR LOS EVENTOS:
//EVENTO QUE SE ESCRIBA "CLICK" CADA VEZ QUE SE DA CLIC CON EL MOUSE EN UN ELEMENTO HTML
let clicks = document.querySelectorAll("td");
clicks.forEach(function(click) {
    click.addEventListener('click',function(){
        console.log(this);})
});

//AHORA UN EJERCICIO CON LA CLASE CERRAR
//OBTENER TODOS LOS ELEMENTOS DE LA CLASE CIERRE
let cierres = document.querySelectorAll(".cierre");

//RECORRER EL NODO CIERRE
/*cierres.forEach(function(cierre) {
    console.log(cierre);
});*/

//AGREGAR UN EVENTO CLICK A CADA UNO DE ELLOS
cierres.forEach(function(cierre) {
    cierre.addEventListener('click',function(
        //42 COMPORTAMIENTO POR DEFECTO
        ev //PUEDE SER event, evento o ev
        
    ){
        console.log("VAYAAAAAAAAAA");
        ev.preventDefault(); //1RA FORMA: MEDIANTE EL METODO DE LA CLASE
        
        //43. NUEVO EJEMPLO DE AGREGAR O QUITAR CLASES
        //PRIMERO SE DEBE OBTENER EL DATO DEL CONTENEDOR, COMO ES UN SOLO CONTENEDOR
        //NO ES NECESARIO HACER NINGUN RECORRIDO, SOLO ES UNA VARIABLE
        let contenedor = document.querySelector(".content");

        //SE QUITARA LAS CLASES DE ANIMACION AL CONTENT O CLASE container
        contenedor.classList.remove("animate__animated");
        contenedor.classList.remove("animate__swing");

        //LUEGO SE AGREGARA CLASES PARA ANIMAR SU SALIDA, ES DECIR AL MOMENTO DE CERRAR HAYA UNA NUEVA ANIMACION
        //ESTE EFECTO SE REALIZARÁ EN EL RECORRIDO DE links o cierres, 
        //YA QUE SE PREPARÓ PARA QUE NO CIERRE CON EL METODO PREVENT
        contenedor.classList.add("animate__animated");
        contenedor.classList.add("animate__fadeOut");

        //44. TIMER
        //EL SEGUNDO PARAMETRO ESTA EN MILISEGUNDOS, POR ELLO 1 SEG = 1000
        //LA DIFERENCIA CON SETINTERVAL ES QUE SE EJECUTARÁ VARIAS VECES
        setTimeout(function(){
            location.href = "../index.html";
        },1000);
        /*setInterval(function(){
            location.href = "../index.html";
        }, 1000);*/

        return false;//2DA FORMA: return false
    })
});

//43 QUITA O AGREGA CLASES A UN ELEMENTO
//CREAMOS UNA VARIABLE PARA ALMACENAR LOS ICONOS
/*let iconos = document.querySelectorAll("i");

//RECORREMOS ICONOS
iconos.forEach(function(icono) {
    //QUITAMOS LA CLASE FA-STAR PARA QUE DEJEN DE SER ESTRELLAS - fas fa-star-half-alt
    //CON LA PROPIEDAD CLASSLIST Y SU METODO REMOVE
    //CLASSLIST CONTIENE TODO LO REFERENTE A UN NODO DE HTML, TIENE REMOVE, ADD ETC
    icono.classList.remove("fa-star-half-alt");
    icono.classList.add("fa-star"); //EJEMPLO DE AGREGAR UNA CLASE
});*/
