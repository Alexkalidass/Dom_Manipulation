
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

class prime extends Person{
    constructor(name,email,password,city,contact,brand,model,car,seats)
    {
        super(name,email,password,city,contact)
        this.brand=brand
        this.model=model
        this.car= car
        this.seats=seats
    }

    collections()
    {
        return `Bike Brand: ${this.brand},bike model: ${this.model},car: ${this.car}, total seats: ${this.seats}`
    }

    updateCity(tripcoverdcitys)
    {
        this.city = tripcoverdcitys
        return `traveled cities in India: ${this.city}`

    }
}

const data= new prime('Alex', 'alex@example.com', 'Pass@123', 'Theni', 6383640644,"Yamaha","MT-15","Hundai",6)

console.log(data.updateCity("Banglore"));
console.log(data.collections());
console.log(data.getInfo());
console.log(data.updateCity("Thekkady,Munnar,Kochi,Madurai,coimbatore,Banglore,chennai"));





