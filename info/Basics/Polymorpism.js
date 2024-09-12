
//polymorphism is achieved when multiple classes have the same method, 
//but each class provides its own implementation for that method.

// class Animal {
//     bark() {
//       console.log("Animal makes a sound");
//     }
//   }
  
//   class Dog extends Animal {
//     bark() {
//       console.log("Dog barks");
//     }
//   }
  
//   class Cat extends Animal {
//     bark() {
//     super.bark();
//     console.log("Cat meows");
     
//     }
//   }
  
//  function animalSound(animal)
//  {
//     animal.bark()
//  }
//   const dog = new Dog(); 
//   const cat = new Cat(); 
//   animalSound(dog) 
//   animalSound(cat)




class methodofPayment{
    processMethod()
    {
        console.log("You choosed the transfer process is ,");
        
    }
}

class cardPayment extends methodofPayment{
    processMethod()
    {
        super.processMethod()
        console.log("You proceed to pay with depit/credit card");
        
    }
}

class UPImethod extends methodofPayment{
    processMethod()
    {
        super.processMethod()
        console.log("You can transfer the amount is the way of googlepay,phonepay,and other UPI methods");
    }
}

function paymentMode(options)
{
    options.processMethod()
}

const Card= new cardPayment()
const UPI= new UPImethod()

paymentMode(UPI)
  


  