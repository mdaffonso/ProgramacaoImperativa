class Student {
  constructor(name, absences, grades) {
    this.name = `${name}`
    this.absences = Number.parseInt(absences) || 0
    this.grades = Array.isArray(grades) ? grades : []
    this.average = Number.parseFloat(this.#getAverage())
  }

  #getAverage() {
    const divisor = this.grades.length
    if(divisor < 1) {
      return null
    }

    return (this.grades.reduce((acc, curr) => acc + curr, 0)/divisor).toFixed(2)
  }

  recordAbsence() {
    this.absences++
  }
}

module.exports = Student