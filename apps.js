//---recordar kamel keys--//

        //--  Declaracion de datos --//
const botonDeEncriptar= document.querySelector (".boton_encriptar");
const cuadroEncriptar = document.querySelector (".cuadro_detexto");
const advertencia = document.querySelector(".texto_advertencia");
const resultado =document.querySelector (".texto_resultado");
const contenedor= document.querySelector (".cuadro_de_resultado");
const copiaRespuesta=document.querySelector (".boton_copiar_resultado");
const botonDeDesEncriptar= document.querySelector (".boton_Desencriptar");

 //--  Declaracion de varibles para color --//

var color1 = "#D9D9D9";
var color2 ="#1082df";


 //--  Funcionalidad boton encriptar incluyendo modifiación del texto de advertencia --//

botonDeEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = cuadroEncriptar.value;
    let txt = texto.normalize("NFD").replace (/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, ""); //--  restricción para encriptar--//

    if(texto === ""){
        advertencia.style.background = color1;
        advertencia.style.color= color2
        advertencia.style.fontWeight = "800";
        advertencia.textContent = " Recuerda ingresar la información en el campo de texto ";

        setTimeout (()=> {
            advertencia.removeAttribute ("style");
        }, 1500);

    }
    else if(texto !==txt) {

        advertencia.style.background = color1;
        advertencia.style.color= color2
        advertencia.style.fontWeight = "800";
        advertencia.textContent = " Completa este campo sin tilde y/o caracteres especiales";
        setTimeout (()=> {
            advertencia.removeAttribute ("style");
        }, 1500);

    }
    
    else if (texto !== texto.toLowerCase()) {
        advertencia.style.background = color1;
        advertencia.style.color= color2
        advertencia.style.fontWeight = "800";
        advertencia.textContent = " Insistimos sin mayúsculas!";
        setTimeout (()=> {
            advertencia.removeAttribute ("style");
        }, 1500);

    }
    //--  criterio para encriptar--//

    else{
        texto = texto.replace (/e/mg,"enter");
        texto = texto.replace (/i/mg,"imes");
        texto = texto.replace (/a/mg,"ai");
        texto = texto.replace (/o/mg,"ober");
        texto = texto.replace (/u/mg,"ufat");
        
    }
    resultado.innerHTML = texto;
    copiaRespuesta.style.visibility = "inherit";
    contenedor.remove ();
})


 //--  Funcionalidad boton desencriptar incluyendo modifiación del texto de advertencia --//


botonDeDesEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = cuadroEncriptar.value;
    let txt = texto.normalize("NFD").replace (/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, ""); //--  restricción para encriptar--//

    if(texto === ""){
        advertencia.style.background = color1;
        advertencia.style.color= color2
        advertencia.style.fontWeight = "800";
        advertencia.textContent = " Recuerda ingresar la información en el campo de texto ";

        setTimeout (()=> {
            advertencia.removeAttribute ("style");
        }, 1500);

    }
    else if(texto !==txt) {

        advertencia.style.background = color1;
        advertencia.style.color= color2
        advertencia.style.fontWeight = "800";
        advertencia.textContent = " Completa este campo sin tilde y/o caracteres especiales";
        setTimeout (()=> {
            advertencia.removeAttribute ("style");
        }, 1500);

    }
    
    else if (texto !== texto.toLowerCase()) {
        advertencia.style.background = color1;
        advertencia.style.color= color2
        advertencia.style.fontWeight = "800";
        advertencia.textContent = " Insistimos sin mayusculas!";
        setTimeout (()=> {
            advertencia.removeAttribute ("style");
        }, 1500);

    }
    //--  criterio para encriptar--//
    else{
        texto = texto.replace (/enter/mg,"e");
        texto = texto.replace (/imes/mg,"i");
        texto = texto.replace (/ai/mg,"a");
        texto = texto.replace (/ober/mg,"o");
        texto = texto.replace (/ufat/mg,"u");
        
    }
    resultado.innerHTML = texto;
    copiaRespuesta.style.visibility = "inherit";
    contenedor.remove ();
})
//--  permite copiar el mensaje obtenido--//
copiaRespuesta.addEventListener("click", e=>{
    e.preventDefault();
    let copiar= resultado;
    copiar.select ();
    document.execCommand("copy");
})