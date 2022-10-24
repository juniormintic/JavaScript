const d=document;

export function countDown (id,limitDate,msj){
 
  const $h3 =d.getElementById(id);
  const countdowndate=new Date(limitDate).getTime();

  
   const interval=  setInterval(()=>{
      let now=new Date().getTime(),
      limitTime= countdowndate-now,
      days= Math.floor(limitTime/(1000*60*60*24)),
      hours=("0"+Math.floor(limitTime%(1000*60*60*24)/(1000*60*60))).slice(-2),
      minutes=("0"+Math.floor(limitTime%(1000*60*60)/(1000*60))).slice(-2),
      seconds=("0"+Math.floor(limitTime%(1000*60)/(1000))).slice(-2);
      
      $h3.innerHTML=`<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
      
      if(limitTime < 0){
        clearInterval(interval);
        $h3.innerHTML=`<h3>${msj}</h3>`;
      }
      
    },1000)   
}