// 11111111111111111111111
//Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15
// Input: [2, 11, 5]
// Output: 18

(arr) => { 
return arr.reduce(  
  (acc, rec) => acc + rec,  
  0   
)  
}

// 2222222222222222222222
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логичского И над ними. Использовать reduce

// Логическое И - это операция &&

// Input: [true,true,true,true]
// Output: true
// Input: [true,false,true]
// Output: false

(arr) => { 
return arr.reduce(  
  (acc, rec) => acc && rec,  
  1   
)  
}

// 33333333333333333333

// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Читайте описание наверху страницы, перед тем, как отчаиваться.

// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}

(arr) => arr.reduce((acc, rec, index) => (
{ ...acc, [`field${index + 1 }`]: rec }), {})

// 44444444444444444444

// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;

// Input: { name: 'pilot', isActive: true }
// Actions:
// Output: { name: 'pilot' }
// Input: { isActive: true }
// Actions:
// Output: {}

function test(param) {
  return Object.keys(param).reduce((acc, rec) => {
  if (typeof param[rec] === 'string') {
  return { ...acc, [rec]: param[rec] }
  }
  return acc  
   }, {}) 
}

// 5555555555555555555555555

// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false

// Input: { isActive: false, isPilot: true }
// Actions:
// Output: ['isActive']

function test(param) {
return Object.keys(param).reduce(
(acc, rec) => {  
    if (!param[rec]) {  
      return acc.concat([rec])  
    }      
    return acc  
  },  
  []  
)  
}

// 6666666666666666666666666

// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)

// Input: [4, 6]
// Actions:
// Output: 5
// Input: [2, 4]
// Actions:
// Output: 3

function test(param) {
  const total = param.reduce((acc, rec) => {
  return acc + rec
   }, 0)
   return total / param.length
 }

//  77777777777777777777777

// Напишите функцию, которая получает массив функций и начальное значение, как аргументы. Функция должна вернуть результат выполнения всех функций в массиве поочередно, используя начальное значение. Используйте reduce.
// Например
// [
// (a) => a+ 1,
// (a) => a * 2
// ],
// 5

// 5 начальное значение.
// Сначала запускается функция с ((a) => a+ 1)(5). Результат будет 6. теперь 6 используется во второй функции
// ((a) => a * 2)(6)

// Итог 12

// Количество функций в начальном массиве не ограничено
// Чтобы решить эту задачу - четко решите, что будет являться аккумулятором, что будет являться ресивером в редьюсе. Какие у них типы. Как пройдет редьюс в первом шаге и что он вернет.
// Задача решается в одну строчку, но тяжела для понимания. Ключ решения - ясность.

// Input: [ (a) => a+ 1, (a) => a * 2 ], 5
// Actions:
// Output: 12
// Input: [ (a) => a - 1, (a) => a * 2 ], 5
// Actions:
// Output: 8
// Input: [ (a) => a + 2, (a) => a * 5, (a) => a - 5 ], 3
// Actions:
// Output: 20

function test(array, initialValue) {
  return array.reduce((acc, rec) => rec(acc), initialValue)
}