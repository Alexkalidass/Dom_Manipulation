//Promise

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



//normal promise and Async Await

// const p= new Promise((resolve,reject)=>
//     {
//        setTimeout(() => {
//         resolve("this is first line")
//        }, 5000);
//     })
    
//     const q= new Promise((resolve,reject)=>
//         {
//            setTimeout(() => {
//             resolve("second time line")
//            }, 10000);
//         })
    
//     function sample()
//     {
//         p.then((res)=>{console.log(res);
//         })
//         console.log("this is second line");
        
//     }
    
    
//     //Async method using
    
//     async function sample()
//     {
//         console.log("Hello World");
        
//         const result= await p
//         console.log("I using the Async and await method");
//         console.log(result);
    
//         const result2= await q
//         console.log("Namaste JavaScript");
//         console.log(result2);
        
        
     
//     }
    
//     sample()





const apiUrl="https://jsonplaceholder.typicode.com/users/1"

async function handlePromis() {
    try
    {
        const data= await fetch(apiUrl)
        const jsonValue= await data.json()
        console.log(jsonValue);
    }
    catch{
        console.log(Error);
        
    }  
}
handlePromis()