const d=document;
export function relojDigital(play,stop,reloj){
                let tiempo;
                let $reloj=d.querySelector(reloj)
                d.addEventListener("click",e=>{
                  if(e.target.matches(play)){
                    tiempo= setInterval(()=>{
                      let hora= new Date().toLocaleTimeString();
                      $reloj.innerHTML=`<h3>${hora}</h3>`;
                      console.log(hora)
                    },1000)
                    e.target.disabled=true;
                  }
                  if(e.target.matches(stop)){                   
                    clearInterval(tiempo);
                    $reloj.innerHTML=null;
                    d.querySelector(play).removeAttribute("disabled");                 

                  }
                })

}

export function alarma(play,stop,audio){
            let $audio= d.createElement("audio");
            $audio.src=audio;
                let alarma;
                d.addEventListener("click",e=>{
                  if(e.target.matches(play)){
                 alarma= setTimeout(()=>{
                     $audio.play();

                   },2000)      
                   e.target.disabled=true;               
                  }
                  if(e.target.matches(stop)){
                    clearTimeout(alarma)
                    $audio.pause();
                    $audio.currentTime=0;
                    d.querySelector(play).disabled=false;

                  }
                })



}
