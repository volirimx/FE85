const subjects = {
    mathematics: { students: 200, teachers: 6 },
    biology: { students: 120, teachers: 6 },
    geography: { students: 60, teachers: 2 },
    chemistry: { students: 100, teachers: 3 }
}
//1. Создать строку из названий предметов написанных через запятую 
console.log(Object.keys(subjects))
//2. Посчитать общее количество студентов и учителей на всех предметах 
const sumSubjects = Object.values(subjects).reduce((sum, subject) => sum + subject.students + subject.teachers, 0)
console.log(sumSubjects)
//3. Получить среднее количество студентов на всех предметах
const averageStudents = Object.values(subjects).reduce((sum, subject) => sum + subject.students, 0) / Object.keys(subjects).length
console.log(averageStudents)

//4. Создать массив из объектов предметов
const subjectArray = Array.from(Object.values(subjects))
console.log(subjectArray)
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const sortedSubjects = Object.values(subjects).sort((a, b) => b.teachers - a.teachers)
console.log(sortedSubjects)