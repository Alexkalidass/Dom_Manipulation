// class User{
// #userPassword
// constructor(userName,userPassword)
// {
//     this.userName=userName
//     this.userPassword=userPassword
// }

// checkPassword(inputPassword)
// {
//    return inputPassword==this.userPassword
// }
// }

// const user= new User("Alex","Pass@123")
// console.log(user.checkPassword("Pass@123"));





class bankAccount{

    #balance
    constructor(amount)
    {
        this.#balance=amount
    }
    depositAmount(credit)
    {
        this.#balance= this.#balance+ credit
    }

    checkBalance()
    {
        return this.#balance
    }

}

const account= new bankAccount(5000)

account.depositAmount(2000)

console.log(account.checkBalance());



