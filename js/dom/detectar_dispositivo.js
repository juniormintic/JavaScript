const d= document,
    n=navigator,
    ua=n.userAgent;

export default function userDeviceInfo(id){
    const $id= d.getElementById(id);
    //console.log(ua);
    const isMobile={
        android:()=>ua.match(/android/i),       
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){
          return  this.android()||this.ios()||this.windows()
        }
    }
    const isDesktop={
        windows:()=>ua.match(/windows nt/i),
        mac:()=>ua.match(/mac os/i),
        linux:()=>ua.match(/linux/i),
        any:function(){
          return  this.windows()||this.mac()||this.linux()
        }
    }
    const isBrowser={
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edg/i),
        any:function(){
            return (  
                this.ie()||
                this.edge()||
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()
                );  
        }
    }
   /*  console.log(isMobile.android());
    console.log(isBrowser.any()); */
  $id.innerHTML=`
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${ isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul> `;

    if(isBrowser.chrome()) $id.innerHTML+=`<p><mark>Este contenido es esclusivo de ${isBrowser.chrome()}</mark></p>`;
    
    if(isBrowser.firefox()) $id.innerHTML+=`<p><mark>Este contenido es esclusivo de ${isBrowser.firefox()}</mark></p>`;
    
    if(isBrowser.edge()) $id.innerHTML+=`<p><mark>Este contenido es esclusivo de ${isBrowser.edge()}</mark></p>`;

    
    if(isDesktop.windows()) $id.innerHTML+=`<p><mark>Descarga nuestra aplicacion solo para Windows </mark></p>`;
    
    if(isMobile.android()) $id.innerHTML+=`<p><mark>Descarga nuestra aplicacion solo para Android </mark></p>`;
    if(isDesktop.linux()) $id.innerHTML+=`<p><mark>Descarga nuestra aplicacion solo para Linux </mark></p>`;
    
    if(isDesktop.mac()) $id.innerHTML+=`<p><mark>Descarga nuestra aplicacion solo para Mac</mark></p>`;
    /**redirecciones */
   /* if(isMobile.android()) window.location.href="https://www.jonmircha.com";*/
}