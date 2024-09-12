// const defaultResult= 0
// let currentResult = defaultResult
// currentResult=(currentResult+10)*3/2-1
// let calculationDescription= '(' + currentResult + ' + 10)* 3/2-1'

// console.log(calculationDescription);


// const person ={
//     name :'Alex',
//     Age: 25,
//     place: 'Theni'
// }

// const Print= (data)=>
// {
//     return [data]

  
// }

// let result= Print(person)

// console.log(result)



// const defaultResult=0
// let currentResult= defaultResult
// function add()
// {
//     const calcDescription=`${currentResult}+  ${usrInput.value}`
//     currentResult= currentResult+parseInt(usrInput.value)
//     outputResult(currentResult,calcDescription)
// }
// addBtn.addEventListener('click',add)



// <------Calculator----->

const defaultResult = 0;
let currentResult = defaultResult;


function add() {
    const calcDescription = `${currentResult} + ${usrInput.value}`;
    currentResult = currentResult + parseInt(usrInput.value);
    outputResult(currentResult, calcDescription);

}

addBtn.addEventListener('click', add);


function subtract() {
    const calcDescription = `${currentResult} - ${usrInput.value}`;
    currentResult = currentResult - parseInt(usrInput.value);
    outputResult(currentResult, calcDescription);
}

subtractBtn.addEventListener('click', subtract);

