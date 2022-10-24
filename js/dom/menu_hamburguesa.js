

export default function hamburgerMenu(panel,btnpanel,menulink){
    const d=document;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnpanel) || e.target.matches(`${btnpanel} *`)){
              d.querySelector(panel).classList.toggle("is-active")
              d.querySelector(btnpanel).classList.toggle("is-active")
            }
            if(e.target.matches(menulink)){
                d.querySelector(panel).classList.remove("is-active")
                d.querySelector(btnpanel).classList.remove("is-active")
        }
    })
}
