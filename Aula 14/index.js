const Course = require('./model/Course')
const Student = require('./model/Student')
const _ = require('./util/util')

const course = new Course("Certified Tech Developer", 6, 2)

const studentsInit = new Array(50).fill({})
const students = studentsInit.map(() => new Student(_.makeRandomName(), _.makeRandomAbsenceValue(), _.makeRandomGrades()))

students.forEach(student => {
  course.addStudent(student)
})

console.log(course.studentsList)