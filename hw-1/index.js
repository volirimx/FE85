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

// Exercise-1
function showNamesOfSubjects (obj) {
  return Object.keys(obj).join(',')
}

// Exercise-2
function countOfStudentsAndTeachers (obj) {
  return Object.values(obj).reduce((acc, current) => (acc += current.students + current.teachers), 0)
}

// Exercise-3
function countAverageOfStudents (obj) {
  return Object.values(obj).reduce((acc, current) => (acc += current.students), 0) / Object.keys(obj).length
}

// Exercise-4, Exercise-5
function sortSubjectsByTeachers (obj) {
  const arrayOfSubjects = Object.values(obj)
  return arrayOfSubjects.sort((a, b) => b.teachers - a.teachers)
}
