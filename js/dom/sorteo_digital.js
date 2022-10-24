const d=document;
export default function draw(btn,select){
    const getWinner=(select)=>{
        const $players=d.querySelectorAll(select),
        random= Math.floor(Math.random()*$players.length),
        winner=$players[random];
        return `El ganador es: ${winner.textContent}`;

    }
    
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){       
          let result= getWinner(select);
          alert(result);
        }
    })
    /*MY SOLUCION*/
   /*  d.addEventListener("click",e=>{
        if(e.target.matches(btn)){       
            const $li=d.querySelectorAll(select)
            alert(`El Ganador es: ${$li[Math.floor(Math.random()*$li.length)].textContent}`)
              
        }
    }) */
}

/**para sorteos de comentarios en redes o youtube */
const getWinnerComment=(select)=>{
    const $players=document.querySelectorAll(select),
    random= Math.floor(Math.random()*$players.length),
    winner=$players[random];
    return `El ganador es: ${winner.textContent}`;

}
//getWinnerComment("ytd-comment-thread-renderer #author-text span")