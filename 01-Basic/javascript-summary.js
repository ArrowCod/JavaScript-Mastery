//  Primitive

// 7 type : String, Number, Booleran, null, undefined, Symbol, BigInt

// Reference (Non primitive)

// Array, Objects, functions

// javascript is a dynamic type language.

//===========================================================

//Stack (primitive) and Heap (non-primitive)

let myStageName = "ArrowTechnologies"

let anothername = myStageName
anothername = "game of thorns"

console.log(anothername)
console.log(myStageName)

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user

userTwo.email = "user@email.com"

console.log(user.email)
console.log(userTwo.email)