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
const array = [
  {
    "_id": "6073083f8f3386d849c0b948",
    "index": 0,
    "guid": "6bc9d923-6a0c-4783-81a3-4613ba9b6aaa",
    "isActive": false,
    "balance": "$3,383.41",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": "Rollins Koch",
    "gender": "male",
    "company": "QUALITEX",
    "email": "rollinskoch@qualitex.com",
    "phone": "+1 (901) 403-2417",
    "address": "923 Kingsway Place, Strykersville, Alaska, 1771",
    "about": "Aliquip in Lorem amet veniam consequat excepteur ex. Reprehenderit fugiat id esse enim. Exercitation laborum dolor aute culpa et adipisicing adipisicing culpa aute. Proident dolore deserunt qui aute. Laboris fugiat commodo cupidatat commodo anim in nostrud do reprehenderit mollit ullamco Lorem. Consectetur sint incididunt tempor aute nulla cupidatat nostrud laborum et commodo minim. Culpa est qui ea irure anim sint.\r\n",
    "registered": "2020-05-05T12:51:32 -03:00",
    "latitude": 45.160563,
    "longitude": -49.286932,
    "tags": [
      "adipisicing",
      "voluptate",
      "eiusmod",
      "sint",
      "dolore",
      "adipisicing",
      "labore"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Jayne Terrell"
      },
      {
        "id": 1,
        "name": "Kendra Garza"
      },
      {
        "id": 2,
        "name": "Bernadette Santos"
      }
    ],
    "greeting": "Hello, Rollins Koch! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "6073083f9e735f4fbbe3629a",
    "index": 1,
    "guid": "4b98cd1e-757c-466b-971d-2b897b019c60",
    "isActive": true,
    "balance": "$2,428.61",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Douglas Williams",
    "gender": "male",
    "company": "DANCITY",
    "email": "douglaswilliams@dancity.com",
    "phone": "+1 (863) 548-3797",
    "address": "289 Johnson Avenue, Grandview, Missouri, 3048",
    "about": "Do laborum dolore ad veniam sint sit cillum sunt ex aute commodo cupidatat. Aliquip ad quis anim ad cupidatat mollit duis nisi incididunt ea proident aliqua eiusmod ex. Adipisicing incididunt proident deserunt irure voluptate commodo consectetur magna cillum labore. Incididunt duis et eiusmod enim reprehenderit dolore non. Elit adipisicing nulla irure ad ex elit reprehenderit consectetur ea fugiat. Est esse dolore in irure eu et anim minim irure laborum ullamco.\r\n",
    "registered": "2019-09-23T09:10:18 -03:00",
    "latitude": 70.702789,
    "longitude": -76.922434,
    "tags": [
      "qui",
      "incididunt",
      "laborum",
      "labore",
      "duis",
      "adipisicing",
      "voluptate"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Marquez Underwood"
      },
      {
        "id": 1,
        "name": "Burks Grant"
      },
      {
        "id": 2,
        "name": "Huff Harvey"
      }
    ],
    "greeting": "Hello, Douglas Williams! You have 2 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "6073083f80254bf5139aa5b9",
    "index": 2,
    "guid": "a2154f26-f915-4960-9e51-179c79179b9e",
    "isActive": true,
    "balance": "$1,458.43",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": "Traci Rivers",
    "gender": "female",
    "company": "EMOLTRA",
    "email": "tracirivers@emoltra.com",
    "phone": "+1 (885) 487-3332",
    "address": "639 Hampton Place, Urie, Utah, 7102",
    "about": "Culpa nostrud velit labore mollit qui ipsum elit. Eiusmod nulla laboris est amet eiusmod ex nisi aliqua ipsum. Ex exercitation minim quis adipisicing culpa laboris culpa laboris ullamco. Nostrud ut eiusmod dolor adipisicing aute irure anim ut consequat ea adipisicing duis ullamco ipsum. Incididunt veniam enim anim proident culpa commodo exercitation ipsum pariatur cupidatat reprehenderit sit.\r\n",
    "registered": "2017-06-13T06:37:40 -03:00",
    "latitude": 58.386096,
    "longitude": -11.165336,
    "tags": [
      "voluptate",
      "aliqua",
      "laboris",
      "adipisicing",
      "eu",
      "enim",
      "pariatur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Cantu Hull"
      },
      {
        "id": 1,
        "name": "Love Nielsen"
      },
      {
        "id": 2,
        "name": "Glenn Kennedy"
      }
    ],
    "greeting": "Hello, Traci Rivers! You have 4 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "6073083fa1fe3332fc653204",
    "index": 3,
    "guid": "5b74fb6a-b249-4640-961c-b13e950d0e3a",
    "isActive": true,
    "balance": "$3,145.22",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Anna Cervantes",
    "gender": "female",
    "company": "EZENT",
    "email": "annacervantes@ezent.com",
    "phone": "+1 (935) 593-2914",
    "address": "521 Oceanview Avenue, Waukeenah, Hawaii, 370",
    "about": "Irure ex anim mollit qui sit id. Exercitation minim Lorem consectetur ullamco sunt minim laboris duis nostrud anim irure incididunt. Irure aliqua est veniam veniam pariatur labore elit Lorem non. Laborum velit esse in Lorem consequat enim ut deserunt elit elit sint aliquip. Cupidatat duis occaecat commodo ad.\r\n",
    "registered": "2020-02-21T04:50:03 -03:00",
    "latitude": 10.275755,
    "longitude": 114.347175,
    "tags": [
      "dolor",
      "ad",
      "qui",
      "aute",
      "mollit",
      "sit",
      "excepteur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Keisha Turner"
      },
      {
        "id": 1,
        "name": "Vargas Lawson"
      },
      {
        "id": 2,
        "name": "Dorothy Simmons"
      }
    ],
    "greeting": "Hello, Anna Cervantes! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "6073083fda9344b6a704c021",
    "index": 4,
    "guid": "e1b3131d-49b0-4e6c-8c20-83591f17b4d3",
    "isActive": true,
    "balance": "$3,417.21",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Araceli Beard",
    "gender": "female",
    "company": "CHORIZON",
    "email": "aracelibeard@chorizon.com",
    "phone": "+1 (801) 567-2116",
    "address": "574 Lawn Court, Brambleton, Iowa, 9456",
    "about": "Anim culpa irure tempor ex eu aliquip officia incididunt velit deserunt nostrud elit. Mollit labore ea proident voluptate cillum cupidatat esse esse amet ex elit amet officia. Sunt Lorem ex officia eiusmod officia amet et quis culpa et in. Elit est culpa et fugiat et fugiat reprehenderit minim deserunt. Exercitation amet eu ullamco officia do non irure ipsum do commodo eu ad dolore. Reprehenderit sint ipsum esse laborum commodo ipsum velit labore.\r\n",
    "registered": "2014-11-26T11:20:05 -03:00",
    "latitude": -34.215573,
    "longitude": -107.38263,
    "tags": [
      "ut",
      "enim",
      "enim",
      "voluptate",
      "pariatur",
      "ipsum",
      "reprehenderit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Adrienne Ryan"
      },
      {
        "id": 1,
        "name": "Chang Holland"
      },
      {
        "id": 2,
        "name": "Willa Wagner"
      }
    ],
    "greeting": "Hello, Araceli Beard! You have 2 unread messages.",
    "favoriteFruit": "apple"
  }
]

// 8888888888888888888888888
// reduce as sort!!!!!
const a = array.reduce((all, item, index) => {
all [item.gender].push(item);
return all;
}, {male: [], female: []})

console.log(a);