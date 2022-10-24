const d=document;
export default function contactFormValidaciones(){
    const $form=d.querySelector(".contact-form"),
        $inputs=d.querySelectorAll(".contact-form *[required]")
   
  // console.log($form,$inputs)

   $inputs.forEach($input=>{    
      const  $small=d.createElement("small");
        $small.id=$input.name;
        $small.textContent=$input.title;
        $small.classList.add("contact-form-error","none");
        $input.insertAdjacentElement("afterend",$small);

   })

   d.addEventListener("keyup",e=>{
       if(e.target.matches(".contact-form [required]")){
          let $input=e.target,
          pattern=$input.pattern || $input.dataset.pattern;
         if(pattern && $input.value!==""){
          let regex = new RegExp(pattern);
            return !regex.exec($input.value)
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            }
            
         if(!pattern){          
            return $input.value ===""
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
 
        }

       }
   })
}