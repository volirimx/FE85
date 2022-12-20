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

// 1. Строка из названий предметов написаных через запятую
function getSubjectName (array) {
  const result = Object.keys(array)
  return '' + result
}
console.log(getSubjectName(subjects))


function calcStudentsandTeachers (array) {
  const arrayObjects = Object.values(array) // 4. Создать массив из объектов предметов

  let numberOfAll = arrayObjects.reduce((acc, item) => { // 2. Посчитать общее количество студентов и учителей на всех предметах
    return acc + item.students + item.teachers
  }, 0)

  const avarageNumberOfStudents = arrayObjects.reduce((acc, item) => { // 3. Получить среднее количество студентов на всех предметах
    return acc + item.students
    }, 0)

  return `Cреднее количество студентов на всех предметах: ${avarageNumberOfStudents / arrayObjects.length}
Общее количество студентов и учителей на всех предметах: ${numberOfAll}`
}
console.log(calcStudentsandTeachers(subjects))


// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
function getSortArray (array) {
  const sortArr = Object.entries(array).map(([ key, value ]) => ({ key, ...value })).sort((a, b) => b.teachers - a.teachers)
  const result = sortArr.reduce((acc, item) => acc.concat(item.key), [])
  return result
}
console.log(getSortArray(subjects))
