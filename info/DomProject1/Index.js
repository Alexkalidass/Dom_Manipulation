let btn=document.querySelector('#new-qoute')
let qoute=document.querySelector('.qoute')
let person=document.querySelector('.person')

const qoutes=[
    {
        qoute: `"If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful after all."`,
        person:`Michelangelo`
    },
    {
        qoute: `"The fight is won or lost far away from witnesses — behind the lines, in the gym, and out there on the road, long before I dance under those lights."`,
        person:`Muhammad Ali`
    },
    {
        qoute: `"Do the best you can until you know better. Then when you know better, do better."`,
        person:`Maya Angelou`
    },
    {
        qoute: `"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do." `,
        person:`Pele`
    },
    {
        qoute: `"I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but should get you pretty near."`,
        person:`Margaret Thatcher`
    },
    {
        qoute: `"Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all." `,
        person:`Sam Ewing`
    },
    {
        qoute: `"The only thing standing between you and outrageous success is continuous progress you need discipline." `,
        person:`Dan Waldschmidt`
    },
    {
        qoute: `"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work."`,
        person:`Stephen King`
    },
    {
        qoute: `"Hard work is a prison sentence only if it does not have meaning. Once it does, it becomes the kind of thing that makes you grab your wife around the waist and dance a jig." `,
        person:`Malcolm Gladwell`
    },
    
]


btn.addEventListener('click',

function()
{
    const random= Math.floor(Math.random() * qoutes.length)

    qoute.innerText= qoutes[random].qoute
    person.innerText=qoutes[random].person
})