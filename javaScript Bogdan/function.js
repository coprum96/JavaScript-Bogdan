// let a = 5
// let b = 3 
// let c

// c=a+b
// console.log(c)

// a = 8
// b = 12 

// c=a+b
// console.log(c)

// let a = 5
// let b = 3 

// function sum(a, b) {
//     const c=a+b
//     console.log(c)
// }

// sum(a, b)

// a = 8
// b = 12 

// sum(a, b)


// a = 14949494949
// b = 605003025

// sum(a, b)

// Функция = объект


// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// // вызов ФУНКЦИИ
// myFn(100, 50) 

// function myFn() {}

// myFn()

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(personOne) {
    personOne.age -= 10 
    return personOne
}

increasePersonAge(personOne)
console.log (personOne.age)
console.log (personOne)