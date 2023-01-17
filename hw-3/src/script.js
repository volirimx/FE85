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
// 1 Создать строку из имен пользователей через запятую
function getUserNames(arr) {
    return arr.map(item => item.name).join(', ');
}
console.log(getUserNames(users));
// 2 Посчитать общее количнство машин у пользователей
function getCarsCount(arr) {
    return arr.reduce((prev, item) => {
        return prev += (item.cars ? item.cars.length : 0);
    }, 0);
}
console.log(getCarsCount(users));
// 3 Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function filterUsersHasEducation(arr) {
    return arr.filter(item => item.hasEducation);
}
console.log(filterUsersHasEducation(users));
// 4 Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function filterUsersHasAnimals(arr) {
    return arr.filter(item => item.animals);
}
console.log(filterUsersHasAnimals(users));
// 5 Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function getCars(arr) {
    let carsArr = arr.map(item => item.cars);
    let result = [];
    for (let i of carsArr) {
        if (i) {
            for (let j of i) {
                result.push(j);
            }
        }
    }
    return result.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    }).join(', ');
}
console.log(getCars(users));
