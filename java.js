let arr = [
    {
        id:Math.random(),
        name: 'Mike',
        age: 25,
        isMarried: false,
    },
    {
        id:Math.random(),
        name: 'John',
        age: 32,
        isMarried: true,
    },
    {
        id:Math.random(),
        name: 'Jack',
        age: 15,
        isMarried: false,
    },
    {
        id:Math.random(),
        name: 'Tom',
        age: 29,
        isMarried: true,
    },

]



let userName = prompt('Введите имя')

if (userName == "" || null) {
    alert('Вы не ввели имя')
} if (userName == undefined) {
    alert('Отмена')
} else {
    let userInfo = arr.find(user => user.name === userName);
    if (confirm(`Удалит информацию о пльзователе? 
   Имя: ${userInfo.name}
   Возраст: ${userInfo.age}`) == true) {
        let filteredArr = arr.filter(value => value.name !== userName)
        alert('Удалено')
        console.log(filteredArr)
    } else {
        alert('Отмена удаления')
        console.log(arr);
    }
}
