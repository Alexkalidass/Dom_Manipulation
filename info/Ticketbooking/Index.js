const startBtn = document.getElementById('startbooking');
const bookForm = document.querySelector('.open-form');
const submit= document.getElementById('submit')
const tickets= document.getElementById('tickets')


const available= document.getElementById('available')
const sold= document.getElementById('sold')
const bookingForm = document.getElementById('booking-form')

let totalTickets=100
let ticketSold=0



startBtn.addEventListener('click', OpenForm);
submit.addEventListener('click',formDetails)


function OpenForm() {
    bookForm.classList.toggle('reveal');
}

async function formDetails(e)
{
    e.preventDefault()

    

    let enteredTickets = Number(tickets.value);
    let seatsAvailable = totalTickets - ticketSold;

    if(ticketSold>=totalTickets)
    {
        alert("Ticket All are Booked")
    }

    if (enteredTickets > 0 && enteredTickets <= seatsAvailable) 
    {

        let formData={
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            tickets: enteredTickets,
            phone: document.getElementById('phone').value,
            from: document.getElementById('from').value,
            to: document.getElementById('to').value
        }

        try{
            const response= await fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
           
            const result = await response.json();

            if(response.ok){
                ticketSold= ticketSold+enteredTickets
                seatsAvailable=totalTickets-ticketSold
        
                available.textContent = seatsAvailable;
                sold.textContent = ticketSold;
        
                bookingForm.reset()
                alert("Ticket Booked successfully...Have a Nice Journey...!!!!");
                bookForm.classList.remove('reveal');
                console.log(result);
                
            }
            else
            {
                console.log("submit form faild");
                
            }
        }
        catch(error)
        {
            console.log(error);
            
        }
        
    } 
    else 
    {
        alert("Invalid number of tickets");
    }
}



const trackBtn= document.getElementById('trackbtn')
const popUp= document.querySelector('.popup-tracktickets')




trackBtn.addEventListener('click',Showpopup)



function Showpopup()
{
    popUp.classList.toggle('show')
}

const enteredEmail=document.getElementById('email')
const trackEmailBtn=document.getElementById('Ok')
trackEmailBtn.addEventListener('click',Trackemail)

async function Trackemail()
{
    let getEmail= enteredEmail.value
    console.log(getEmail);

    if(getEmail)
    {
        try
        {
            const response= await fetch('https://jsonplaceholder.typicode.com/posts')

            const jsonValue= await response.json()
            console.log(jsonValue);

            let checkEmail= jsonValue.some(data=>data.email===getEmail)

            if(checkEmail)
            {
                alert(`Name: ${data.name}, ID: ${data.id}`)
                popUp.classList.remove('show')
                enteredEmail.value = ''
            }
            else
            {

                //could not store a email id in dummy api what i entered email
                alert("Please step out the House.. your travel journey will start soon!!!!")
                popUp.classList.remove('show')
                enteredEmail.value = ''
            }
            
        }
        catch(error)
        {
            console.error("error occured");
        }
    }
    else
    {
        alert("please enter email id")
    }
    
}



