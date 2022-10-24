import { scrollTopButton } from "./dom/boton_scroll.js";
import { countDown } from "./dom/cuenta_regresiva.js";
import { darkTheme } from "./dom/tema_oscuro.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {relojDigital,alarma} from "./dom/reloj.js";
import { moveBall, shortcut } from "./dom/teclado.js";
import { responsiveMedia } from "./dom/objeto_responsive.js";
import { responsiveTest } from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/detectar_dispositivo.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo_digital.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidaciones from "./dom/validaciones_formulario.js";

const d= document;
d.addEventListener("DOMContentLoaded" ,e=>{
    hamburgerMenu(".panel",".panel-btn",".menu a");
    relojDigital("#iniciar-reloj","#detener-reloj","#reloj");
    alarma("#play-alarma","#stop-alarma","assets/alarma.mp3");
    countDown("countdown","january 24,2023,21:20:10 ","🎈🍰Feliz Cumpleaños junior 🥳 🎈");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube",
     "(min-width: 900px)",
      `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener"> Ver Video</a>`, 
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>`);
    responsiveMedia(
      "googlemaps",
      "(min-width: 900px)",
      `<a href="https://goo.gl/maps/HWR9m2SskXoEXJqd9" target="_blank" rel="noopener"> Ver Mapa</a>`,
      `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63230.68750441449!2d-72.50575363552916!3d7.903638684718145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sloma%20de%20bolivar!5e0!3m2!1ses-419!2sco!4v1637635052696!5m2!1ses-419!2sco" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
      responsiveTest("responsive-tester");
      userDeviceInfo("user-device");
      webCam('webcam');
      getGeolocation("geolocation");
      searchFilters(".card",".card-filter");
      draw("#winer-btn",".player");
      slider();
      scrollSpy();
      smartVideo();
      contactFormValidaciones();
    })
    
    d.addEventListener("keydown",e=>{
      shortcut(e)
      moveBall(e,".ball",".stage")
    })
    
    darkTheme(".dark-theme-btn","dark-mode");
    networkStatus();