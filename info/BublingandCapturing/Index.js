document.querySelector('#grandparent').addEventListener('click',(a)=>{
    console.log("Grandparent Clicked");
   
},false)


document.querySelector('#parent').addEventListener('click',(e)=>{
    console.log("parent Clicked");
    
},false)


document.querySelector('#child').addEventListener('click',(e)=>{
    console.log("child Clicked");
   
    e.stopPropagation()
},false)