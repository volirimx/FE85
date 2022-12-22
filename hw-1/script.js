
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

// 1

function getSubjects (obj) {
    return Object.keys(obj).join(', ')
}

// 2

function calcPeople (obj) {
    let teachersCount = 0
    let studentsCount = 0
    for (key in obj) {
        teachersCount += obj[key].teachers
        studentsCount += obj[key].students
    }
    return `Teachers : ${teachersCount}; Students : ${studentsCount}`
}


// 3

function calcAverageStudentsCount (obj) {
    let arrOfSubjects = Object.values(obj)
    return arrOfSubjects.reduce((prev, next) => prev + next.students / arrOfSubjects.length, 0)
}

// 4, 5

function getSortedArrOfSubjects (obj) {
    return Object.entries(obj).sort((a, b) => b[1].teachers - a[1].teachers)
}

console.log(getSortedArrOfSubjects(subjects))