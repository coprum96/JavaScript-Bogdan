/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const Name = 'Stas'
const familyName = 'Medyanik'
const job = 'Frontend-Developer'

const personInfo = 
    'My name ' + Name + ' '+ familyName + ' ' + 'i am' + job


console.log(personInfo)