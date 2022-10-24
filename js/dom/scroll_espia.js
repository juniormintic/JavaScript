const d= document;

export default function scrollSpy(){

    const $section=d.querySelectorAll('section[data-scroll-spy]');
    const $menu=d.querySelectorAll('.menu a');

    const cb=(entries)=>{
      entries.forEach(entry =>{
          const id=entry.target.getAttribute('id');
         /*  console.log(id)
          console.log(entry) */
          if(entry.isIntersecting){
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            
        }else{
              d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');

          }
      })
    
    }
    let options = {
        //root
        rootMargin: '0px',
         threshold: [0.5,0.75]
      }
      
      let observer = new IntersectionObserver(cb, options);
      $section.forEach(el=>{
          observer.observe(el);
      })
    
}
