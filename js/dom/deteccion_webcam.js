const d=document,
    n=navigator,
    w=window;
export default function webCam(id){
    const $video=d.getElementById(id);   

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({
            audio:true,
            video:true
        }).then(stream=>{
            console.log(stream)        
            $video.srcObject=stream;           
              $video.play();           
        }).catch(err=>{
            $video.insertAdjacentHTML("beforebegin",`<p><mark>Ocurrio el siguente error: ${err}</mark></p>`)
        console.error(`Ocurrio el siguente error: ${err}`)
        })
       

          

    }
       
}