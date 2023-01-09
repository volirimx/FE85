
    // 1. Создать строку из имен пользователей через запятую
    // 2. Посчитать общее количнство машин у пользователей
    // 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
    // 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
    // 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean
}


const users: IUser[] = [
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
]

// 1
function getNames (arr: IUser[]): string {
    return arr.reduce((prev, next) => prev + next.name + ' ,', '')
}
// 2

function countCars (arr: IUser[]): number {
    let result = 0
    arr.forEach(item => {
        if(item.cars) {
            result += item.cars.length
        }
    })
    return result
}

// 3

function filterByEducation (arr: IUser[]): IUser[] {
    return arr.filter(item => item.hasEducation ? 1 : -1)
} 

// 4

function filterByAnimals (arr: IUser[]): IUser[] {
    return arr.filter(item => item.animals ? -1 : 1)
}

// 5

function getCars (arr: IUser[]): string {
    let result: string[] = []
    arr.forEach(item => {
        if(item.cars) {
            result.push(item.cars.join(', '))
        }
    })
    return result.join(', ')
}
