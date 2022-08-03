// Дедлайн!!! 01.08.2022

// 1 - Создать переменную каждого типа данных.
let a
let b = false
const c = 10.5
const d = 'text'
let f = 1000000000000n
let g = Symbol()
let h = null
let i = Object()

// 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
var j = null
let k = ''
const l = 100
j = false
k = '5'

// 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).
let m = undefined
m = String(m)
m = Boolean(m)

let n = true
n = Number(n)
n = String(n)

let o = 10.5
o = String()
o = +o

// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.
const aa = 'text' + undefined
const bb = 'text' + true
const cc = 'text' + 10
const dd = 'text' + "text"
const ee = 'text' + 1n
const ff = 'text' + String(Symbol())
const gg = 'text' + null
const hh = 'text' + Object()

const ii = 10 + undefined
const jj = 10 + false
const kk = 10 + 20
const ll = 10 + "text"
const mm = 10 + Number(0n)
const nn = 10 + String(Symbol())
const oo = 10 + null
const pp = 10 + Object()

// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.
const qq = 'text' - undefined
const rr = 'text' - true
const ss = 'text' - 10
const tt = 'text' - "text"
const uu = 'text' - String(1n)
const vv = 'text' - String(Symbol())
const ww = 'text' - null
const xx = 'text' - Object()

const yy = 10 - undefined
const zz = 10 - false
const aaa = 10 - 20
const bbb = 10 - "text"
const ccc = 10 - Number(0n)
const ddd = 10 - String(Symbol())
const fff = 10 - null
const ggg = 10 - Object()

// 6 - Задача (Условный оператор)
//  Пользователь вводит логин и пароль.
//  Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
//  то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».

// let login = 'kykold'
// let password = '1234asdQQ'
// let promptLogin = prompt("Логин:")
// let promptPassword = prompt("Пароль:")
// if (promptLogin === login && promptPassword === password) {
//     alert("Добро пожаловать")
// } else {alert("Ошибка входа")}

// 7 - Задача (Условный оператор)
//  Пользователь вводит год рождения. Программа показывает количество
//  лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
//  если нет – «вход воспрещен».

// let year = +prompt("Год рождения:")
// let yearNow = new Date().getFullYear()
// let years = yearNow - year
// let messagePrint = 0
// if (years >= 16) {
//     alert("Возраст: " + years + " " + "добро пожаловать")
// } else {
//     alert("Возраст: " + years + " " + "вход воспрещен")
// }

// 8 - Задача (Условный оператор)
//  Создайте программу, которая выводит надбавку за стаж.
//  Пользователь вводит стаж работы, а программа пишет ему надбавку.
 
// let workYears = prompt("Стаж работы:")
// if (workYears >= 30) {
//     alert("Надбавка: " + "50%")
// } else if (workYears >= 20) {
//     alert("Надбавка: " + "30%")
// } else if (workYears >= 10) {
//     alert("Надбавка: " + "15")
// }

// 9 - Задача (Условный оператор и свитч кейс)
//  Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
//  9.1 Решить на иф елсах
//  9.2 Решить на свитч кейсе
//  9.3 Решить на тернарном операторе

// let day = +prompt("Номер дня:")

// if (day === 1) {
//     alert('Monday')
// }
// if (day === 2) {
//     alert('Tuesday')
// }
// if (day === 3) {
//     alert('Wednesday')
// }
// if (day === 4) {
//     alert('Thursday')
// }
// if (day === 5) {
//     alert('Friday')
// }
// if (day === 6) {
//     alert('Saturday')
// }
// if (day === 7) {
//     alert('Sunday')
// }

// switch (day) {
//     case 1:
//         alert('Monday')
//         break
//     case 2:
//         alert('Tuesday')
//         break
//     case 3:
//         alert('Wednesday')
//         break
//     case 4:
//         alert('Thursday')
//         break
//     case 5:
//         alert('Friday')
//         break
//     case 6:
//         alert('Saturday')
//         break
//     case 7:
//         alert('Sunday')
//         break
// }

// day === 1 ? alert('Monday') :
// day === 2 ? alert('Tuesday') :
// day === 3 ? alert('Wednesday') :
// day === 4 ? alert('Thursday') :
// day === 5 ? alert('Friday') :
// day === 6 ? alert('Saturday') :
// day === 7 ? alert('Sunday') : ''

// 10 - Задача (Условный оператор)
//  Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//  1, если значение больше нуля,
//  -1, если значение меньше нуля,
//  0, если значение равно нулю.

// let number = +prompt("Введите число:")
// if (number > 0) {
//     alert(1)
// } else if (number < 0) {
//     alert(-1)
// } else if (number === 0) {
//     alert(0)
// }

// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message
// login === 'Сотрудник' ? message = 'Привет' :
// login === 'Директор' ? message = 'Здравствуйте' :
// login === '' ? message = 'Нет логина' : message = ''

// 12 - Задача (Условный оператор)
//  В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
//  Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

// let room = prompt("Номер квартиры:")
// if (room >= 1) {
//     if (room <= 20) {
//         alert("Подъезд 1")
//     } else if (room >= 21) {
//     if (room <= 48) {
//       alert("Подъезд 2")  
//     } else if (room >= 49) {
//     if (room <= 90) {
//         alert("Подъезд 3")
//     }
// } 
// }
// } 

// 13 - Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser = prompt("Браузер:")
// if (browser === 'Edge') {
//     alert( "You've got the Edge!" )
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' )
// } else alert( 'We hope that this page looks ok!' )

// 14 - Задача (свитч кейс)
// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break
    case 1:
        alert('Вы ввели число 1')
        break
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break
    default: null
}
