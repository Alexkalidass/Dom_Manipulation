document.querySelector('#category').addEventListener('click',(e)=>{
    console.log(e.target.id);
    // window.location.href='/'+e.target.id
    
})


const category= document.querySelector('#category')
const newSection= document.createElement('li')


newSection.innerHTML='Dress'
newSection.setAttribute('id','dress')
category.appendChild(newSection);