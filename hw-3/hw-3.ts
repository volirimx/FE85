interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
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

// Создать строку из имен пользователей через запятую
function getNames (arr: IUser[]): string {
    return arr.map(item => item.name).join(', ')
}

// Посчитать общее количество машин у пользователей
function getCarsCount (arr: IUser[]): number {
    return arr.reduce((prev, item) => {
        return prev += (item.cars ? item.cars.length : 0)
    }, 0)
}

// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function filterUsersByEducation (arr: IUser[]): IUser[] {
    return arr.filter(item => item.hasEducation)
}

// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function filterUsersByAnimals (arr: IUser[]): IUser[] {
    return arr.filter(item => item.animals)
}

// Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function getCars (arr: IUser[]): string {
    let arrayOfCars =  arr.map(item => item.cars);
    let result: string[] = [];

    for (let i of arrayOfCars) {
        if (i) {
            for (let j of i) {
                result.push(j)
            }
        }
    }

    return result.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    }).join(', ');
}
