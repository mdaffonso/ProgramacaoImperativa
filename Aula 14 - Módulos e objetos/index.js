const Course = require('./model/Course')
const Student = require('./model/Student')
const _ = require('./util/util')

const course = new Course("Certified Tech Developer", 7, 2)

const studentsInit = new Array(50).fill({})
const students = studentsInit.map(() => new Student(_.makeRandomName(), _.makeRandomAbsenceValue(), _.makeRandomGrades()))

students.forEach(student => {
  course.addStudent(student)
})


const executeTest = (test) => {
  switch(test) {
    case "listAll":
      return course.studentsList
    case "listPassing":
      return course.getPassingStudents()
    case "course":
      return course
    default:
      return "você deve fornecer um dos seguintes valores para a função: listAll | listPassing | course"
  }
}

console.log(executeTest("course"))