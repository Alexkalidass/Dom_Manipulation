// const fruit= ["Apple","Banana","grapes","berry",{number:10,name:"Alex"},['NIT','CBE']]
// console.log(fruit)

// fruit.push({company: 'MNC',city: 'Bang;lore'})
// console.log(fruit)

// const removeFirst= fruit.shift()
// console.log(removeFirst)
// console.log(fruit)


// const addBegining= fruit.unshift("Tomato")
// console.log(fruit)


// const slicedFruits= fruit.slice(3)
// console.log(slicedFruits)

// const slicedFruits1= fruit.slice(-3,-1)
// console.log(slicedFruits1);


// const line= "I am styding javaScript programing language"

// console.log(line.includes('ge',10))




// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr1 = ['v', 'w', 'x', 'y', 'z'];


// console.log(...arr,...arr1);


// function app(...name)
// {
//     console.log(...name)
// }

// let name=["Alex","Pandian","K","S","A"]
// app(name)



// let name= "Alex"
// let number= 10

// let result= name* number

// console.log(result);


// let fruits= ["Aple","banana","carot","lemone","berry"]

// let modified= fruits.forEach((number)=>{
//     console.log(number.toUpperCase());
    
// })


// function exampleFunction() {
//     return {
//         firstValue: "First return",
//         secondValue: "Second return"
//     };
// }

// const result = exampleFunction();
// console.log(result.firstValue)


// const users= [
//     {id: 1,name:"Alex",degree: "BE-Mech"},{id:2,name:"Vishnu",degree:"MBA"},{id:3,name:"Prasanth",degree:"Bsc"}
// ]

// console.log(users[1].name)



// <!--Tostring and forEach---->


// let name= ["Alex","Vishnu","Prasanth","Surya","Hariram"]

// // console.log(name.toString());

// name.forEach((name) => {
//     console.log(name);
    
// });


// <!---Push---->


// let name= ["Alex","Vishnu","Prasanth","Surya","Hariram"]
 
// name.push("Saran")
// console.log(name);

// name.unshift("Prem")
// console.log(name);

// name.pop()
// console.log(name);

// name.shift()
// console.log(name);


// let nameSlice= name.slice(1,4)
// console.log(nameSlice);

// name.splice(1,3,"one","two","three","four","Five","six","seven")
// console.log(name);

// let test= name.toSpliced(1,3)
// console.log(test);
// console.log(name);


// const breakFast= ["idly","dosa","Pongal","Poori","Vadai"]
// const lunch= ["rice","Briyani","Fruits"]
// const dinner=["Dosai","Milk"]

// const dailyFood= breakFast.concat(lunch,dinner)
// console.log(dailyFood);

// const number= [1,2,3,4,5]


// console.log(number.at(3));


// const number= [10,11,12,13,14,15]

// console.log(number.copyWithin(0,2));


// const fruits=["Apple","Banana","Cherry","Dragon fruit","orange"]

// const value = fruits.entries()
// for(let show of value)
//     {
//         console.log(show);
        
//     }


// const check= fruits.values()
// console.log(check.next().value);


// const marks= [85,65,88,96,89]

// const result= marks.every((pass)=>{
//     return pass>80
// })

// console.log(result);


// const number1=[1,2,3,4,5]
// const number2=[6,7,8,9,10]
// const number3=[11,12,13,14,15]



// console.log(number1.filter((num)=>{return num%2==0}));


// const members=[{
//     name: 'Alex',
//     id: 1,
//     active: true
// },
// {
//     name: 'Trisha',
//     id: 2,
//     active: true
// },
// {
//     name: 'Helan',
//     id: 3,
//     active: false
// }

// ]

// const result=(members.filter((pass)=>{return pass.active}));

// result.forEach(final => {
//     console.log(final)
// });




// const numbers = [1, 3, 7, 8, 9];

// const found = numbers.findIndex(num => num > 7);

// console.log(found); 




// const numbers = [1, 2, [3, 4], [5, 6, 7,],[9,[10,11,12],[13,14,15]]];

// const flattened = numbers.flat(3);

// console.log(flattened);


// const name= "Alex"
// const result= Array.from(name)
// console.log(result);



// function closure(passValue)
// {
//     const initialNumber= passValue
//     console.log(initialNumber);

//     const add=()=>{
//         return initialNumber+1
//     }
//     const remove=()=>{
//         return initialNumber-1
//     }
//     const totalPoints=()=>{
//         return initialNumber
//     }
//     return {add,remove,totalPoints}
// }

// const final=closure(100)
// console.log(final.add());
// console.log(final.remove());
// console.log(final.totalPoints());



// const input = document.getElementById("textInput");
// input.addEventListener('keypress', function(event) {
//     alert('Key pressed: ' + event.key);
// });

//  function sample(){
//     return new Promise((resolve,reject)=>{
//         const guest="i reached home safely"
//         if(guest)
//         {
//             resolve(guest)
//         }
//         else{
//             reject()
//         }
//     })
//  }

//  sample().then((msg)=>console.log("ok good night"+ msg))

//  .catch(()=>console.log("then what happend"))



// function fetchData()
// {
//     return new Promise((resolve,reject)=>{
//         const dataFetch= fetch("https://jsonplaceholder.typicode.com/users/1")
         
//         if (dataFetch) 
//         {
//             dataFetch
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json();
//                     }
                    
//                 })
//                 .then(data => resolve(data))
//                 .catch(error => reject(error));
//         } 
//         else 
//         {
//             reject(new Error("Invalid URL"));
//         }
//     })
// }
// fetchData()
// .then((reply)=> console.log(reply))
// .catch(()=>console.log("error occured")
// )



// function userData(user){
//     const showData= document.getElementById('userData')

//     showData.innerHTML=
//     `<h2>${user.name}</h2>
//     <p>Email: ${user.email}</p>
//     <p>Phone: ${user.phone}</p>
//     <p>Website: ${user.website}</p>
//     `
// }


// const btn= document.getElementById('fetchUserBtn')

// btn.addEventListener('click',()=>{
//     fetchData()
//     .then((data)=>{
//         userData(data)
//     })
//     .catch(error => {
//         console.error(error);
//         document.getElementById("userData").innerHTML = `<p>${error}</p>`;
//     })
// })

 



 


























