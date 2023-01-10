// С ниже приведенным объектом решить следующие задачи:

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

// 1. Создать строку из названий предметов написаных через запятую
function getStringFromSubjects(obj) {
   return Object.keys(obj).join(', ')
}

console.log(getStringFromSubjects(subjects))

// 2. Посчитать общее количeство студентов и учителей на всех предметах
function getSumOfAllStudenstAndTeachers(obj) {
   return Object.values(obj).reduce((acc, current) => (acc += current.students + current.teachers), 0)
}

console.log(getSumOfAllStudenstAndTeachers(subjects))

// 3. Получить среднее количество студентов на всех пердметах
function countAverageOfStudents(obj) {
   return Object.values(obj).reduce((acc, current) => (acc += current.students), 0) / Object.keys(obj).length
}

console.log(countAverageOfStudents(subjects))

// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
function getArrayFromObject(obj) {
   const arrayOfSubjects = Object.values(obj)
   return arrayOfSubjects.sort((a, b) => b.teachers - a.teachers)
}

console.log(getArrayFromObject(subjects))
