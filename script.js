var cars = ['Ford', 'Mazda', 'Kia', 'BMW']
console.log(cars)
console.log(cars[2])

console.log(cars.length)

//добавит в конец
cars.push('Audi')
console.log(cars)

//удаляет и возвращает последний элемент
var audi = cars.pop()
console.log(cars, audi)

//удаляет и возвращает первый элемент 
var ford = cars.shift()
console.log(cars, ford)

//добавляет начало
cars.unshift(audi)
console.log(cars)

console.log(cars.indexOf('Kia'))
console.log(cars.indexOf('kia'))

var index = cars.indexOf('Kia')
var kia = cars[index]
console.log(kia)
