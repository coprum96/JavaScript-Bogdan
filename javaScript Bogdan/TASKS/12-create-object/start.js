/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const me = {
    name: 'Stas',
    surname: 'Medyanik',
    favorityNumber: 777,
}

// const meInfo = 'my name is + me.name + {me.surnameand my favorite number is ${me.favorityNumber}' 

const meInfo = 'my name is ' + me.name + ' ' + me.surname + ' my favorite number is' + ' ' + me.favorityNumber

console.log(meInfo)