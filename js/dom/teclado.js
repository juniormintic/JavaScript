const  d = document;
let x=0,y=0;
export function moveBall(e,ball,stage){
    const $ball=d.querySelector(ball),
    $stage=d.querySelector(stage),
     limitsBall=$ball.getBoundingClientRect(),
     limitsStage=$stage.getBoundingClientRect();
    /* 
     console.log(e.keyCode);
     console.log(limitsBall,limitsStage);
    */
    
    
    switch (e.keyCode) {
        case 37:
            if(limitsBall.left>limitsStage.left)  {
                e.preventDefault();    
                x--;
            }      
            break;
            case 38:
            if(limitsBall.top>limitsStage.top){
                e.preventDefault();            
                y--;
            }        
            break;
            case 39:
            if(limitsBall.right<limitsStage.right){
                e.preventDefault();            
                x++;
            }        
            break;
            case 40:
             if(limitsBall.bottom<limitsStage.bottom){
                 e.preventDefault();            
                 y++;
             }        
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
}




export function shortcut(e){
   /*  console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    //dara booleanos por ser teclas especiales
    console.log(`CTRL:${e.ctrlKey}`);
    console.log(`SHIFT:${e.shiftKey}`);
    console.log(`ALT:${e.altKey}`);
    console.log(e); */

    if(e.key==="a"&&e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    if(e.key==="p"&&e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if(e.key==="c"&&e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }

}