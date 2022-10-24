
const d=document,
    n=navigator;
export default function getGeolocation(id){
    const $div=d.getElementById(id);
    const options={
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

    const success=position=>{
        let crd=position.coords;
        $div.innerHTML=`    
        <p>Tu posicion actual es:</p>    
        <ul>
            <li>Latitude: <b>${crd.latitude}</b></li>
            <li>Longitude: <b>${crd.longitude}</b></li>
            <li>Presicion: <b>${crd.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},20z?hl=es" target="_blank" rel="noopener">ver en google maps</a> `;
       
    }
    const error=err=>$div.innerHTML=`<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;

 n.geolocation.getCurrentPosition(success,error,options)
 //otro methodo para constatente mente detectar cammbio de coordenanas Geolocation.watchPosition() mas usado para dispositivos moviles ej(whasapp,google,endrive)

}