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


let stringsubject = Object.keys(subjects).toString();
console.log(`Предметы :` + stringsubject);


let studentsMath = Number(Object.values(subjects.mathematics.students.toString()).join(''));
let studentsBio = Number(Object.values(subjects.biology.students.toString()).join(''));
let studentsGeo = Number(Object.values(subjects.geography.students.toString()).join(''));
let studentsChem = Number(Object.values(subjects.chemistry.students.toString()).join(''));
let sumstudents = studentsMath + studentsBio + studentsGeo + studentsChem;
console.log(`Общее количество студентов:` + sumstudents);

let teacherSmath = Number(Object.values(subjects.mathematics.teachers.toString()).join(''));
let teacherBio = Number(Object.values(subjects.biology.teachers.toString()).join(''));
let teacherGeo = Number(Object.values(subjects.geography.teachers.toString()).join(''));
let teacherChem = Number(Object.values(subjects.chemistry.teachers.toString()).join(''));
let sumsTeachers = teacherSmath + teacherBio + teacherGeo + teacherChem;
console.log(`Общее количество учителей:` + sumsTeachers);


let average = sumstudents / Object.values(subjects).length;
console.log(`Среднее кол-во студентов: ` + average);


const arraySubjects = Object.entries(subjects)
const arrayTeachers = arraySubjects.sort((a, b) => {
   return b[1].teachers - a[1].teachers;
});
console.log(arrayTeachers)
