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

// Task 1
const getName = users.map((item: IUser): string => item.name).join(', ')

// Task 2
const sumCars = users.reduce((acc: number, item: IUser): number => {
  if (item.cars) {
    return acc + item.cars.length
  } 
  return acc
}, 0)

// Task 3
function hasEducation(arr: IUser[]): IUser[] {
  return arr.filter((item) => item.hasEducation)
}

// Task 4
function hasChildren(arr: IUser[]): IUser[] {
  return arr.filter((item) => item.hasChildren)
}

// Task 5
function getCarNam (arr: IUser[]): string {
  const result: string[] = []
  arr.map(item => {
    if (item.cars)  {
      result.push(item.cars.join(", "))
    }
  })
  return result.join(", ")
}
