let name = prompt("Как вас зовут?")
if (name == "Alex") {
    let account = prompt("Номер счета ?") 
    if(account == 7777 ) {
        let money = prompt("Сколько обналичить ?")
        if(money < 10000 ) {
            
            alert("Все отлично")
        } else {
            alert("Недостаточно сред")
        }
    } else {
        alert("Пользователь не найден, досвидули")
    }
} else {
    alert("Пользователь не найден, досвидули")
}


