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

// 1. Создать строку из имен пользователей через запятую
const names = users.reduce((acc: string, item: IUser): string => acc + item.name + ', ', '').slice(0, -2)
console.log(names)

// 2. Посчитать общее количeство машин у пользователей
const cars = users.reduce((acc: number, item: IUser): number => acc + (!!(item.cars) ? item.cars.length : 0), 0)
console.log(cars)

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function filterByEducation (arr: IUser[]) {
  return arr.filter((item: IUser) : boolean => !!(item.hasEducation))
}
console.log(filterByEducation(users))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function filterByAnimals (arr: IUser[]) {
  return arr.filter((item: IUser): boolean => !!(item.animals))
}
console.log(filterByAnimals(users))

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function filterByBrands(arr: IUser[]) :string {
  return Array.from(new Set(arr.reduce((acc: string[], item: IUser): string[] => acc.concat(!!(item.cars) ? item.cars : []), []))).join(', ')
}
console.log(filterByBrands(users))
