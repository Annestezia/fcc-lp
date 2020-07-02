  window.onload = (function(){
    const s = document.querySelectorAll('.wp');    
    const links = document.querySelectorAll('.nav-link');
    const navBar = document.getElementById('nav-bar');
    


    const setActive = el => {
      [...el.parentElement.parentElement.children].forEach(sib => sib.children[0].classList.remove('active'))
      el.classList.add('active');
      };

      //for scroll
      for(let i = 0; i<s.length;i++){
        new Waypoint({
          element: s[i],
          handler: function(direction){
            setActive(links[i]);
          },
          offset:function () {
            return this.context.innerHeight() - this.adapter.outerHeight() - 100;
            }  
        });
      }
      // for click
     
      navBar.addEventListener('click',(e)=>{
        if(!e.target.tagName==="A"){
          return;
        }
        e.target.addClass('active');
       
      })
  })(); 
 