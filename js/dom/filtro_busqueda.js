const d=document,
    w=window;

export default function searchFilters(selector,input){
    d.addEventListener("keyup",e=>{
        if(e.target.matches(input)){
            if(e.key==="Escape") e.target.value="";
            d.querySelectorAll(selector).forEach(el=>{
                  (el.textContent.toLowerCase().includes(e.target.value.toLowerCase()))
                    ?el.classList.remove('filter')
                    :el.classList.add('filter');
            })               
        }       
    })

}