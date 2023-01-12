"use strict";
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
// Создать строку из имен пользователей через запятую
const usersName = users.map((user) => user.name).join(',');
console.log(usersName);
// Посчитать общее количнство машин у пользователей
const sumCars = users.reduce((sum, user) => {
    return sum += user.cars ? user.cars.length : 0;
}, 0);
console.log(sumCars);
// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const education = users.filter((user) => user.hasEducation === true);
console.log(education);
// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const animal = users.filter((user) => user.animals ? user.animals.length : 0);
console.log(animal);
// Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function getCars() {
    const car = users.filter((user) => user.cars ? user.cars.length : 0);
    const nameCar = car.map(car => car.cars).join(',');
    console.log(nameCar);
}
getCars();
