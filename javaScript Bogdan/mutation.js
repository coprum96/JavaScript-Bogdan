// const a = 10
// let b = a 
// b = 30 
// console.log(a)
// console.log(b)

// const person = {
//     name: 'BOB',
//     age: 21
// }

// const person2 = person 

// person2.age = 26
// person2.isAdult = true

// console.log(person.age)
// console.log(person.isAdult)


// ВАРИАНТ 1
// const person = {
//     name: 'BOB',
//     age: 21
// }

// const person2 = Object.assign({}, person)

// person2.age = 45

// console.log(person.age)
// console.log(person2)


// ВАРИАНТ 2
// const person = {
//     name: 'BOB',
//     age: 21
// }

// const person2 = {...person}

// person2.name = 'Alice'

// console.log(person2.name)
// console.log(person.name)

// ВАРИАНТ 3
const person = {
    name: 'BOB',
    age: 21
}

const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Alice'

console.log(person2.name)
console.log(person.name)
