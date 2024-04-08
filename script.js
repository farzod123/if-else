// 3.04

// let name = prompt("Как вас зовут?")
// if (name == "Alex") {
//     let account = prompt("Номер счета ?") 
//     if(account == 7777 ) {
//         let money = prompt("Сколько обналичить ?")
//         if(money < 10000 ) {

//             alert("Все отлично")
//         } else {
//             alert("Недостаточно сред")
//         }
//     } else {
//         alert("Пользователь не найден, досвидули")
//     }
// } else {
//     alert("Пользователь не найден, досвидули")
// }




// 5.04

// let year =  prompt("Какой год ?")

// if (year % 4 === 0) {
//     alert("visokonostiy")
    
// } else {
//     alert("ne visokonostiy")
    
// }



/* dz */

let once = +prompt("months")

switch (once) {
    case 1:
        alert("january")
        break;
    case 2:
        alert("february")
        break;
    case 3:
        alert("march")
        break;
    case 4:
        alert("april")
        break;
    case 5:
        alert("may")
        break;
    case 6:
        alert("june")
        break;
    case 7:
        alert("july")
        break;
    case 8:
        alert("august")
        break;
    case 9:
        alert("september")
        break;
    case 10:
        alert("october")
        break;
    case 11:
        alert("november")
        break;
    case 12:
        alert("december")
        break;

    default:
        break;
}


let month = +prompt("months")

if (month == 1) {
    alert("january")
} else {
    alert("error")
}
if (month == 2) {
    alert("february")
} else {
    alert("error")
}
if (month == 3) {
    alert("march")
} else {
    alert("error")
}
if (month == 4) {
    alert("april")
} else {
    alert("error")
}
if (month == 5) {
    alert("may")
} else {
    alert("error")
}
if (month == 6) {
    alert("june")
} else {
    alert("error")
}
if (month == 7) {
    alert("july")
} else {
    alert("error")
}
if (month == 8) {
    alert("august")
} else {
    alert("error")
}
if (month == 9) {
    alert("september")
} else {
    alert("error")
}
if (month == 10) {
    alert("october")
} else {
    alert("error")
}
if (month == 11) {
    alert("november")
} else {
    alert("error")
}
if (month == 12) {
    alert("december")
} else {
    alert("error")
}

let twice = +prompt("months")

switch (twice) {
    case 1:
        alert("31 days")
        break;
    case 3:
        alert("31 days")
        break;
    case 5:
        alert("31 days")
        break;
    case 7:
        alert("31 days")
        break;
    case 2:
        alert("28 days")
        break;
    case 8:
        alert("30 days")
        break;
    case 4:
        alert("30 days")
        break;
    case 6:
        alert("30 days")
        break;
    case 7:
        alert("30 days")
        break;
    case 9:
        alert("30 days")
        break;
    case 10:
        alert("30 days")
        break;
    case 11:
        alert("30 days")
        break;
    case 12:
        alert("30 days")
        break;



    default:
        break;
}


let num1 = prompt('первое число');
num1 = Number(num1);

let operator = prompt('оператор (/,+,*,-)');

let num2 = prompt('второе число');
num2 = Number(num2);


switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2);
}


