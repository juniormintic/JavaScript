const w= window,
    d=document,
    n=navigator;
export default function networkStatus(){   
    function isOnLine(){
        const $div=d.createElement("div");
        if(n.onLine){
            $div.textContent="conexion restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent="conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");            
        }
        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(()=>{d.body.removeChild($div)},2000)

    }
    w.addEventListener("offline",(e)=>isOnLine())
    w.addEventListener("online",e=>isOnLine())
}



