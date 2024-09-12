// const btn2= document.querySelector('.btn-2')



// function alertBtn() {
//     alert("I love dom concept")
// }
// btn2.addEventListener("click",alertBtn)


// //mouse Over


// const btn3= document.querySelector('.box-3')

// btn3.addEventListener('mouseover',changeBgColor)

// function changeBgColor() {
//     btn3.style.backgroundColor='red'
// }




//when we click the button the content shoul be show in the screen

const Btn= document.querySelector('.reveal-btn')
const content= document.querySelector('.hiden-content')

Btn.addEventListener('click',show)

function show()
{
    if(content.classList.contains('reveal-btn'))
    {
        content.classList.remove('reveal-btn')
    }
    else
    {
        content.classList.add('reveal-btn')
    }
}