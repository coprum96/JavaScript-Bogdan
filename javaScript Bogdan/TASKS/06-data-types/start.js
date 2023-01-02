/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const myString = 'Hi, there ' + 'I am russian boy'
const myNumber = 7
const myLogic = true
const myNull = null
let myUndefined
const myObject = {
    name: 'Stas'
}

const myArray = [
    'Whats up?'
]

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myLogic)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof myObject)
console.log(typeof myArray)
