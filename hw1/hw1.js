/* С ниже приведенным объектом решить следующие задачи:

1. Создать строку из названий предметов написаных через запятую
2. Посчитать общее количнство студентов и учителей на всех предметах
3. Получить среднее количество студентов на всех пердметах
4. Создать массив из объектов предметов
5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
 */

const subjects = {
   mathematics: {
      students: 200,
      teachers: 6
   },
   biology: {
      students: 120,
      teachers: 6
   },
   geography: {
      students: 60,
      teachers: 2
   },
   chemistry: {
      students: 100,
      teachers: 3
   }
}

/* 1  задание */
let stringsubject = Object.keys(subjects).toString();
console.log(`Предметы :` + stringsubject);


/* 2 задание */
const sumStudents = Object.values(subjects);
const sumallStudents = sumStudents.map(item => item.students).reduce((prev, curr) => prev + curr, 0);
console.log(`Общее количество студентов: ` + sumallStudents);


const sumTeachers = Object.values(subjects);
const sumaTeachers = sumTeachers.map(item => item.teachers).reduce((prev, curr) => prev + curr, 0);
console.log(`Общее количество учителей: ` + sumaTeachers);

/* 3 задание */

let average = sumallStudents / Object.values(subjects).length;
console.log(`Среднее кол-во студентов: ` + average);

/* 4 - 5 задание */
const arraySubjects = Array.from(Object.values(subjects));
const arrayTeachers = arraySubjects.sort((a, b) => {
   return b.teachers - a.teachers;
});
console.log(arrayTeachers);

const itemObject = Array.from(Object.values(subjects));
console.log(`Массив обьектов предметов: ` + itemObject);