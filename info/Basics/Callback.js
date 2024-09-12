// console.log("this is a call back function");
// console.log("hello javascript");
// console.log("i have been learning a javascript since last week");


// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Fetching the api data");
//         callback();
//     }, 2000); 
// }

// function processData() {
//     console.log("On process ...");
// }


// fetchData(processData);




// function userInput(pass){
//     const enterName= prompt("enter your name")
//     pass(enterName)
// }

// function printUi(enterName){
//     document.getElementById('nameDisplay').textContent= `your Name is`+ enterName
// }
// userInput(printUi)



// Fetch Data with using callback function



function fetchData()
{

       const apiUrl="https://jsonplaceholder.typicode.com/posts"
         fetch(apiUrl)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
        })
        .then((actualData)=>{showResult(actualData)})
        .catch((error)=>{error})
}


function showResult(actualData)
{
   const uiDiv= document.getElementById('userData')
   uiDiv.innerHTML=""
   actualData.forEach(data => {
      const postHtml = `
            <div>
                <h2>Id: ${data.id}</h2>
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>
            </div>`
            uiDiv.style.backgroundColor = "lightblue";
            uiDiv.innerHTML =uiDiv.innerHTML+ postHtml
   })
}
const btn= document.getElementById('fetchUserBtn')
btn.addEventListener('click',()=>{
    fetchData()
})




