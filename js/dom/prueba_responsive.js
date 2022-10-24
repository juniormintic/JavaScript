const d=document;
export function responsiveTest(form,btn){
    const $form=d.getElementById(form);
        let ventana;
           

      d.addEventListener('submit',e=>{
          e.preventDefault();
           if(e.target===$form){                         
                ventana=open($form.direccion.value,"test",`width=${$form.ancho.value},heigth=${$form.alto.value}`);
           }
       })   
       d.addEventListener('click',e=>{
           if(e.target===$form.cerrar){
            ventana.close();
           }
       })
    
}
