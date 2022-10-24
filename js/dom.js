/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */


/* console.log(window);
 console.log(document);
let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); 
*/

/*
console.log('elementos del documento');

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);//utf 8
console.log(document.title);
console.log(document.links);//linsk que se encuentren en el dom
console.log(document.images);//img en el dom
console.log(document.form);//formularios en el dom
console.log(document.styleSheets);//hojas de estilo 
console.log(document.scripts);//script asociados 

setTimeout(()=>{
    despues de 3sg selecina con cursor y combierte a string y lo muestra en consola
    console.log(document.getSelection().toString());
},3000);
  
document.write(`<h2>Hola mundo</h2>`);
*/
/******************* */
/*clase 62 */

/*

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach( el=>console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card"[2]));
console.log(document.querySelectorAll("#menu li"));
*/
/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */

/* console.log(document.documentElement.getAttribute("lang"));
 console.log(document.querySelector(".link-dom").href);
 console.log(document.querySelector(".link-dom").getAttribute("href"));
 document.documentElement.lang = "en";
 console.log(document.documentElement.lang);
 document.documentElement.setAttribute("lang", "es-MX");
 console.log(document.documentElement.lang);

 const $linkDOM = document.querySelector(".link-dom");
 $linkDOM.setAttribute("target", "_blank");
 $linkDOM.setAttribute("rel", "noopener");Ñ
 $linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
 console.log($linkDOM.hasAttribute("rel"));
 $linkDOM.removeAttribute("rel");
 console.log($linkDOM.hasAttribute("rel"));
 //Data-Attributes
 console.log($linkDOM.getAttribute("data-description"));
 console.log($linkDOM.dataset);
 console.log($linkDOM.dataset.description);
 $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
 console.log($linkDOM.dataset.description);
 $linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
 console.log($linkDOM.dataset.description);
 console.log($linkDOM.hasAttribute("data-id"));
 $linkDOM.removeAttribute("data-id");
 console.log($linkDOM.hasAttribute("data-id"));
 */
/************* */
/*Curso JavaScript: 64. DOM: Estilos y Variables CSS*/

/* const $linkDOM= document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.color);
console.log($linkDOM.style.backgroundColor);

console.log(getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));
 */
/*variables css-cunstom property*/

/* const $html=document.documentElement,
        $body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor=varDarkColor;
$body.style.color= varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor); */

/************ */
/*clase 65 DOM: clases CSS */

/* console.log(document.querySelector(".card"));
console.log(document.getElementsByClassName("card"));

const $card=document.querySelector(".card");

console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");

console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45","rotate-135");
//se puede remplasar varios o agregar varias class al mismo tiempo
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");
 */


/************ */
/*clase 66 DOM: texto y HTML*/
/* const $whatIsDOM= document.getElementById("que-es");

let texto=`
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

$whatIsDOM.innerText=texto;//no se usa
$whatIsDOM.textContent=texto;//no interpreta html,remplaza texto
$whatIsDOM.innerHTML=texto;//remplaza contenido dentro de la etiqueta html,si entiende y interpreta html mas texto
$whatIsDOM.outerHTML=texto;//el contenido no serea hijo de la etiqueta selcionada ,remplaza etiqueta html mas el texto (remplaza todo lo selecionado)
 */

 /*Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM*/

/*  const $cards = document.querySelector('.cards');

 console.log($cards.children);
 console.log($cards.children[2]);
 console.log($cards.parentElement);
 console.log($cards.firstElementChild);
 console.log($cards.lastElementChild);
 console.log($cards.nextElementSibling);
 console.log($cards.previousElementSibling);
 console.log($cards.closest('div'));
 console.log($cards.closest('body'));
 console.log($cards.children[2].closest('section'));
  */

/*Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos*/


/* const $figure= document.createElement("figure"),
    $img=document.createElement("img"),
    $figcaption= document.createElement("figcaption"),
    $figcaptiontext= document.createTextNode("animals"),
    $cards=document.querySelector(".cards"),
    $figure2=document.createElement("figure");

$img.setAttribute("src","https://placeimg.com/200/200/Animals","alt","animals");
$img.setAttribute("alt","animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptiontext);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML=`
    <img src="https://placeimg.com/200/200/People" alt="People">
    <figcaption>People</figcaption>
`;
   

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones=["primavera","verano","otoño","invierno"],
    $ul=document.createElement("ul");

document.write("<h3>estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li);
});

const continentes =["africa","america","asia","europa","oceania"],
    $ul2=document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML=``;

continentes.forEach(el=>{
    $ul2.innerHTML+=`<li>${el}</li>`;
});

const meses=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Nobiembre",
    "Diciembre"
];
$ul3=document.createElement("ul");
$fragment= document.createDocumentFragment();

meses.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);`
 */

/*Curso JavaScript: 69. DOM: Templates HTML */
/* const $cards =document.querySelector(".cards")
const $template= document.getElementById("template-card").content;
const $fragment= document.createDocumentFragment();

const cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
];

cardContent.forEach(el=>{    
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent= el.title;

   let $clone= document.importNode($template,true);
    $fragment.appendChild($clone);
    
});

$cards.appendChild($fragment);
 */

/*Curso JavaScript: 70. DOM: Modificando Elementos (Old Style)*/

/* const $cards=document.querySelector(".cards"),
    $newCard=document.createElement("figure");
    $cloneCards=$cards.cloneNode(true);//de esta manera se clona con contenido

    $newCard.innerHTML=`
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `;

    $newCard.classList.add("card");

 

$cards.replaceChild($newCard,$cards.children[2]); //remplza el elemento 
$cards.insertBefore($newCard,$cards.firstElementChild); //inserta el nevo elemento de primero
$cards.removeChild($cards.lastElementChild);//elimina el ultimo elemento
document.body.appendChild($cloneCards);  //se inserta el clon 
 */


/* Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) */

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/
/* 
const $cards=document.querySelector(".cards"),
    $newCard=document.createElement("figure");
    

    let $contenCard=`
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;

    $newCard.classList.add("card");

    $newCard.insertAdjacentHTML("beforeend",$contenCard);
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any"); 
 */
    //$cards.insertAdjacentElement("afterbegin",$newCard);
/*otras alternativas para modificar elementos */
   /* 
    $cards.prepend($newCard); /*inserta el contenido como primer hijo
    $cards.append($newCard);/*inserta el contenido como ultimo hijo
    $cards.after($newCard);/*inserta el contenido como hermano siguiente
    $cards.before($newCard);/*inserta el contenido como  hermano anterior
    */



/*Curso JavaScript: 72. DOM: Manejadores de Eventos*/

/* function holamundo (){
    alert('hola mundo');
    console.log(event);
}
/*majador semantico solo permite una funcion por evento y esta al ser asignada no se usa parentesis o puede auto ejecutarse se maja como si fuera una variable *
const $eventoSemantico= document.getElementById("evento-semantico");
$eventoSemantico.onclick= holamundo;
*otra opcion 
$eventoSemantico.onclick=()=>{
    holamundo();
    console.log(event.target);
    console.log(event.type);
}
/*con el addEventListener se puede manejar multiples eventos o funciones para el mismo evento en el llamodo de funciones no se usa parentecis o se autoejecutara la funcion  *
const $eventoMultiple= document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click",holamundo);

/*con el addEventListener se puede manejar multiples eventos o funciones para el mismo evento en el llamodo de funciones en este caso al llamado de funciones se hace con parentesis si es llamada dentro de la funcion manejadora  *
$eventoMultiple.addEventListener("click",(event)=>{
    holamundo();//se puede con parentesis por estar dentro de una funcion manejadora
    alert('manejador de evento multiple')
    $eventoMultiple.style.backgroundColor= "red";
    console.log(this); //obj windows por estar en arrow function y el metodo cuelga del obj global 
});

/*Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos*/
/**las funciones que reciben parametros deven ir dentro de una funcion manejadora o no funcionara como se espera 
 * 
function saludar(nombre='desconocid@'){
    alert(`hola ${nombre}`)
}
$eventoMultiple.addEventListener("click",(event)=>{
    saludar();
    saludar("junior");   
});

const $eventoRemover=document.getElementById("evento-remover");


function removerEvento(){
    alert(`removiendo el evento ${event.type}`);
    $eventoRemover.removeEventListener("dblclick",removerEvento);
    $eventoRemover.disabled=true;// sesabilita el boton
}

$eventoRemover.addEventListener("dblclick",removerEvento) */


/*Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura)*/

/* 
const $div= document.querySelectorAll(".eventos-flujo div");

function flujoEventos(){
    console.log(`hola te saluda ${this.className} el click lo origino el ${event.target.className}`)
}

$div.forEach((div)=>{
    //*tipo burbuja del elemento de adentro asia fuera hace que se activen los eventos de sus padres
    //*div.addEventListener("click",flujoEventos);
   //* div.addEventListener("click",flujoEventos,false);

     //*fase de captura desde afuera al mas interno hace que se activen los eventos de sus hijos
    //* con once el evento se ejecuta una sola vez
   //* div.addEventListener("click",flujoEventos,true);
    //* div.addEventListener("click",flujoEventos,{
    //*     capture:false,
    //*     once:true
    //* });

    
});
 */


/**Curso JavaScript: 75. DOM: stopPropagation & preventDefault */
/* 
 const $div= document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`hola te saluda ${this.className} el click lo origino el ${e.target.className}`)
    //*para deterner la propagacion del evento y que no se active en otros elementos 
    e.stopPropagation();
}

$div.forEach((div)=>{
   
    div.addEventListener("click",flujoEventos);
   //* div.addEventListener("click",flujoEventos,false);
  
});

$linkEventos.addEventListener("click",e =>{
    alert("click en enlace ");
    //*prevenDefault cansela los eventos por defecto
    e.preventDefault();
     //*para deterner la propagacion del evento y que no se active en otros elementos 
    e.stopPropagation();

}); */
 




/**Curso JavaScript: 76. DOM: Delegación de Eventos */
/* 
function flujoEventos(e){
    console.log(`hola te saluda ${this.className} el click lo origino el ${e.target.className}`)
    
}

document.addEventListener("click",(e)=>{
    console.log("click en ",e.target);
    if(e.target.matches(".eventos-flujo a")){
        alert("click en enlace ");
        e.preventDefault();
    }
    if(e.target.matches(".eventos-flujo div")){
      flujoEventos(e);
    }
})
 */





/* Curso JavaScript: 77. BOM: Propiedades y Eventos */
/* window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("*********Evento Resize*********")
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e)
})

window.addEventListener("scroll",e=>{
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
    
})

window.addEventListener("load",e=>{
   // console.clear();
    console.log("*********Evento Load*********")
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e)

})
//* DOMContentLoaded mejor opcion para cargar mas rapido el documen mas eficiente en casos en donde el dom  tenga elementos con asincronia
document.addEventListener("DOMContentLoaded",e=>{
    //console.clear();
    console.log("*********Evento DOMContentLoaded*********")
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e)
}); */






/* Curso JavaScript: 78. BOM: Métodos */
/* 
//*window.alert("alerta");
//*window.confirm("confirmacion")
//*window.prompt("aviso")

const $btnAbrir=document.getElementById("abrir-ventana"),
    $btnCerrar=document.getElementById("cerrar-ventana"),
    $btnImprimir=document.getElementById("imprimir-pantalla");
let ventana;
$btnAbrir.addEventListener("click",e=>{
    //**metodo de window  abrir pagina en otra pestaña
   ventana= open("https://jonmircha.com");
})
$btnCerrar.addEventListener("click",e=>{
    //**metodo de window cerrar ventana
    ventana.close();
})
$btnImprimir.addEventListener("click",e=>{
    //**metodo de window  para imprimir
    print();
}) */





/**Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador*/

/* console.log("******Objeto URL (location)********")
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);//** cuando se pasan parametros en la url
console.log(location.pathname);
//* solo ejecutar en cosola de navegador ->location.reload();  */

console.log("*******Objeto Historial (history)");
console.log(history);
console.log(history.length);
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);

console.log("*******Object Navegador (navegador)*****");
console.log(navigator);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);





