  window.onload = (function(){
    const s = document.querySelectorAll('.wp');    
    const links = document.querySelectorAll('.nav-link');

    // const toggleActive = function(el){
    //   el.toggleClass('active');      
    // };
    const setActive = el => {
      [...el.parentElement.parentElement.children].forEach(sib => sib.children[0].classList.remove('active'))
      el.classList.add('active');
      };


      // const setActive = (el)=>{
      //   for(let i = 0; i < links.length; i++){
      //     if(links[i].classList.contains('active')){
      //       links[i].classList.remove('active');
      //     }
      //     addActive(links[i]);
      //   }
      // };


      for(let i = 0; i<s.length;i++){
        new Waypoint({
          element: s[i],
          handler: function(direction){
            console.log(links[i]);
            // links[i].classList.toggle('active');
            setActive(links[i]);

          },
          offset: 'bottom-in-view' 
        });
      }
//   

  })(); 
// function() {
//                           return links[i].id==='features'? '-30%':'bottom-in-view';
//                         }
// function() {
//               return links[i].id==='features'? :'10%';
//             }'bottom-in-view'


  // function() {
  //   return this.element.offsetHeight / -3;
  // }
        // console.log(item);
        // setActive(links[i]);
                // links[i].classList.toggle('active');
  
  // const  header = document.getElementById('header');
    // const navbar = document.getElementById('nav-bar');
    // const setActive = (el)=>{
    //     for(let i = 0; i < links.length; i++){
    //       if(links[i].classList.contains('active')){
    //         links[i].classList.remove('active');
    //       }
    //       links[i].classList.add('active');
    //     }
    //   };
    // const addActive = function(el){
    //   el.classList.add('active');
    // };
    // const setActive = sectionNum=>{
    //   removeActive(links[sectionNum]);
    //   addActive(links[sectionNum]);
    // };
        // var waypoints = document.querySelectorAll('.section');
    // for (var i = s.length - 1; i >= 0; i--) {
    //     var waypoint = new Waypoint({
    //         element: s[i],
    //         handler: function(direction) {
    //           // setActive(links[i]);
    //             links[i].classList.toggle('active');
    //         },
    //         offset: '65%',
    //     });
    // }







  // const waypoint = new Waypoint();
  // s.waypoint({
  //   handler: direction=>{
  //     // var active = this;
  //     console.log(s);


  //   }
  // })


    // addActive(links[0]);
      



  //  ;

  //   const homeDown = new Waypoint({
  //     element: document.getElementById('home'),
  //     handler: function(direction) {
  //       const header = document.querySelector('.header__main');
  //       // direction==="down"? header.style.cssText=`height:50px; background-color: var(--light); box-shadow: 0 1px 1px #aaa` : header.style.cssText='height:50px; background-color: rgba(0,0,0,0); box-shadow: 0 0 0';
  //       setActive(0);
  //     }
  //   });

  //   const homeUp = new Waypoint({
  //     element: document.getElementById('home'),
  //     handler: function(direction){
  //       if(direction==='up'){ 
  //         setActive(0);
  //       } 
  //     },
  //     offset: function () {
  //       return this.context.innerHeight() - this.adapter.outerHeight() - 100;
  //       }
  //   });

  //   const featuresUp = new Waypoint({
  //     element: document.getElementById('features'),
  //     handler: function(direction){
  //       if(direction==='up'){
  //         setActive(1);
  //       } 
  //     },
  //     offset: function () {
  //       return this.context.innerHeight() - this.adapter.outerHeight() - 300;
  //       }
  //   });
     
  // const featuresDown = new Waypoint({
  //   element: document.getElementById('features'),
  //   handler: function(direction){
  //     if(direction==='down'){
  //       setActive(1);
  //     } 
  //   },
  //   offset: '30%'
  // }); 
   
  //  const orderUp = new Waypoint({
  //   element: document.getElementById('order'),
  //   handler: function(direction){
  //     setActive();
  //   },
  //    offset: '60%'
  // });
  // const orderDown = new Waypoint({
  //   element: document.getElementById('order'),
  //   handler: function(direction){
  //     setActive();
  //   },
  //    offset: '60%'
  // }); 
