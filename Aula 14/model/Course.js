class Course {
  constructor(name, passingGrade, absenceLimit, studentsList) {
    this.name = `${name}`
    this.passingGrade = Number.parseFloat(passingGrade) || 7
    this.absenceLimit = Number.parseInt(absenceLimit) || 0
    this.studentsList = Array.isArray(studentsList) ? studentsList : []
  }

  addStudent(student) {
    this.studentsList.push(student)
  }

  hasStudentPassed(student) {
    if(!student || !student.average || typeof student.absences !== "number") {
      return null
    }

    return (
      student.average >= this.passingGrade
      && (
        student.absences < this.absenceLimit
        || student.average >= this.passingGrade*1.1
      )
    ) ? true 
      : false
  }

  getPassingStudents() {
    return this.studentsList.map(student => ({ name: student?.name, passed: this.hasStudentPassed(student)}))
  }
}

module.exports = Course