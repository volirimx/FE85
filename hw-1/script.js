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

// Строка предметов через запятую
let stringsubjects = Object.keys(subjects).toString();
console.log('Предметы: ' + stringsubjects);

// Сумма студентов
let sumstudents = Object.values(subjects).reduce(function(sum, current) {
    return sum + current.students;
}, 0)
console.log(sumstudents);

// Сумма учителей
let sumteachers = Object.values(subjects).reduce(function(sum, current) {
    return sum + current.teachers;
}, 0)
console.log(sumteachers);

// Среднее количество студентов
let average = sumstudents / Object.values(subjects).length;
console.log('Среднее количество студентов: ' + average);

// Массив 
let arraySubjects = Array.from(Object.values(subjects))
console.log(arraySubjects);

// Сортировка массива
const arrayTeachers = arraySubjects.sort((a, b) => {
    return b.teachers - a.teachers;
});
console.log(arrayTeachers);





