
class Person 
{
    constructor(name,email,password,city,contact) 
    {
        this.name=name
        this.email= email
        this.password=password
        this.city= city
        this.contact=contact
    }

    getInfo()
    {
        return `Name: ${this.name}, Email: ${this.email}, City: ${this.city}, Contact: ${this.contact}`;
    }

    validEmail()
    {
        const regEmail= /\S+@\S+\.\S+/
        return regEmail.test(this.email)
    }

    updateCity(newCity)
    {
        this.city = newCity
        return `City updated to: ${this.city}`

    }
} 

const data= new Person('Alex', 'alex@example.com', 'Pass@123', 'Theni', 6383640644)

console.log(data.getInfo());
console.log(data.validEmail());
console.log(data.updateCity('Chennai'));


