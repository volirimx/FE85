//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

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

let stringsubjects = Object.keys(subjects).toString();
console.log('Предметы: ' + stringsubjects);

let studentsmath = Number(Object.values(subjects.mathematics.students.toString()).join(''));
let studentsbio = Number(Object.values(subjects.biology.students.toString()).join(''));
let studentsgeo = Number(Object.values(subjects.geography.students.toString()).join(''));
let studentschem = Number(Object.values(subjects.chemistry.students.toString()).join(''));
let sumstudents = studentsmath + studentsbio + studentsgeo + studentschem;
console.log('Общее количество студентов: ' + sumstudents);

let teachersmath = Number(Object.values(subjects.mathematics.teachers.toString()).join(''));
let teachersbio = Number(Object.values(subjects.biology.teachers.toString()).join(''));
let teachersgeo = Number(Object.values(subjects.geography.teachers.toString()).join(''));
let teacherschem = Number(Object.values(subjects.chemistry.teachers.toString()).join(''));
let sumteachers = teachersmath + teachersbio + teachersgeo + teacherschem;
console.log('Общее количество учителей: ' + sumteachers);

let average = sumstudents / Object.values(subjects).length;
console.log('Среднее количество студентов: ' + average);

const arraySubjects = Object.entries(subjects)
const arrayTeachers = arraySubjects.sort((a, b) => {
    return b[1].teachers - a[1].teachers;
});

console.log(arrayTeachers);





