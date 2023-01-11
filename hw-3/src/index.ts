interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
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
const usersName: string = users.map((user: IUser): string => user.name).join(',');
console.log(usersName);

// Посчитать общее количнство машин у пользователей
const sumCars: number = users.reduce((sum: number, user: IUser): number => {
    return sum += user.cars ? user.cars.length : 0;
}, 0)
console.log(sumCars);

// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const education: IUser[] = users.filter((user: IUser) => user.hasEducation === true);
console.log(education);

// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const animal: IUser[] = users.filter((user: IUser) => user.animals ? user.animals.length : 0);
console.log(animal);

// Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function getCars () {
    const car = users.filter((user: IUser) => user.cars ? user.cars.length : 0)
    const nameCar = car.map(car => car.cars).join(',')
    console.log(nameCar);
}
getCars()

