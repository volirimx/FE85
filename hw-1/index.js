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
const namesOfSubject = Object.keys(subjects)

// Exercise-2
const countOfStudentsAndTeachers = Object.values(subjects).reduce((acc, current) => (acc += current.students + current.teachers), 0)

// Exercise-3
const averageCountOfStudents = Object.values(subjects).reduce((acc, current) => (acc += current.students), 0) / Object.keys(subjects).length

// Exercise-4, Exercise-5
const arrayOfSubjects = [...Object.values(subjects)]
arrayOfSubjects.sort((a, b) => b.teachers - a.teachers)