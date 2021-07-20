String.prototype.addCharactersBefore = function (numberOfSpaces, character = " ") {
  if(numberOfSpaces < 1) return this
  const filler = new Array(numberOfSpaces).fill(character).join("")
  return filler + this
}

const schedule = (method = "help", processes = [], rrCycles = 4) => {

  const helpMessage = "a função recebe 3 argumentos: \nmethod: 'fifo' | 'sjf' | 'srtf' | 'rr' \nprocesses: [ { procNumber: number, start: number, duration: number } ] \nrrCycles: number (se o método for 'rr', define o número de ciclos por rodada), "

  if(method === "help") return console.log(helpMessage)

  let lineEnd = "-|"
  let topLine     = "|-| ciclo    ||"
  let bottomLine  = "|-| processo ||"
  let topLineAdd
  let bottomLineAdd
  let topLineAddLength
  let bottomLineAddLength
  let cycleStart = 0
  let cycleEnd = 0
  let longestNumberString = `${processes.reduce((acc, curr) => acc + curr.duration, 0)}`.length
  let time = Math.min(...processes.map(process => process.start))
  processes.sort((a, b) => a.start > b.start && 1 || -1)

  const formatLines = (i, process) => {
    let y = `${i}`
    let v = i === cycleStart ? "S" : `${process.procNumber}`

    topLineAdd = y.length >= longestNumberString ? `${y}|` : `${y.addCharactersBefore(longestNumberString-y.length, "0")}|`
    topLineAddLength = topLineAdd.length

    bottomLineAdd = v.length >= longestNumberString ? `${v}|` : `${v.addCharactersBefore(longestNumberString-v.length)}|`
    bottomLineAddLength = bottomLineAdd.length

    topLine += topLineAdd.addCharactersBefore(bottomLineAddLength-topLineAddLength)
    bottomLine += bottomLineAdd.addCharactersBefore(topLineAddLength-bottomLineAddLength)

    if(i === cycleEnd) {
      cycleStart = i
      topLine += lineEnd
      bottomLine += lineEnd
    }
  }

  const makeTable = () => {
    processes.forEach((process) => {
      cycleEnd = cycleStart+process.duration
      for(let i = cycleStart; i <= cycleEnd; i++) {
        formatLines(i, process)
      }
    })
  }

  const generateFIFOScheduling = () => {
    makeTable()
  }

  const generateSJFScheduling = () => {
    while (processes.find(p => !p.finished)) {
      let execute = processes.reduce((ni, process, i) => {
        if (!process.finished && process.start <= time && (ni === -1 || process.duration < processes[ni].duration)) {
          ni = i
        }
        return ni
      }, -1)
      
      processes[execute].started = time
      time += processes[execute].duration
      processes[execute].finished = time
    }
    processes.sort((a, b) => a.started - b.started)
    
    makeTable()
  }

  const generateSRTFScheduling = () => {
    const chunkifiedProcesses = processes.map(process => {
      return {
        ...process,
        chunkified: new Array(process.duration).fill(false)
      }
    })

    let i = 0
    let prevProcess = null
    while(i <= processes.reduce((acc, curr) => acc + curr.duration, 0)-1) {
      let execute = chunkifiedProcesses.reduce((ni, current, ci) => {
        if (
          current.chunkified.includes(false) 
          && current.start <= i 
          && (
            ni === -1 
            || current.chunkified.filter(c => c === false).length < chunkifiedProcesses[ni].chunkified.filter(c => c === false).length
          )
        ) {
          ni = ci
        }
        return ni
      }, -1)

      const alternateProcess = () => {
        prevProcess = chunkifiedProcesses[execute]
        cycleStart = i
      }

      if(!prevProcess) {
        alternateProcess()
      } else if(prevProcess.procNumber !== chunkifiedProcesses[execute].procNumber) {
        alternateProcess()
        topLine += lineEnd
        bottomLine += lineEnd
      } else {
        let invertChunk = chunkifiedProcesses[execute].chunkified.indexOf(false)
        chunkifiedProcesses[execute].chunkified[invertChunk] = true
        i += 1
      }
      cycleEnd = -2
      formatLines(i, chunkifiedProcesses[execute])
    }
    topLine += lineEnd
    bottomLine += lineEnd
  }

  const generateRRScheduling = () => {

    const formattedProcesses = processes.map(process => {
      return {
        ...process,
        cyclesLeft: process.duration
      }
    }).sort((a, b) => a.started - b.started)

    let queue = []

    let rrCycle = 0
    let i = 0
    let current = formattedProcesses.shift(0)
    let nextInLine = []
    cycleEnd = -1
    while(i <= processes.reduce((acc, curr) => acc + curr.duration, 0)-1) {

      queue = queue.filter(p => p.cyclesLeft > 0)

      const spliceStart = formattedProcesses.indexOf(formattedProcesses.find(p => p.start <= i && p.cyclesLeft > 0))
      const spliceEnd = formattedProcesses.lastIndexOf(formattedProcesses.find(p => p.start <= i && p.cyclesLeft > 0))+1
      
      if(spliceStart >= 0) {
        nextInLine = formattedProcesses.splice(spliceStart, spliceEnd-spliceStart)
        if(nextInLine.length) { 
          queue.push(...nextInLine)
        }
      }
      
      if(i === 0) {
        formatLines(i, current)
      }

      if((rrCycle > rrCycles && queue.length) || current.cyclesLeft === 0) {
        queue.push(current)
        current = queue.shift(0)
        rrCycle = 1
        cycleStart = i
        topLine += lineEnd
        bottomLine += lineEnd
      } else {
        current.cyclesLeft -= 1
        i += 1
        rrCycle += 1
      }
      
      formatLines(i, current)
    }

    topLine += lineEnd
    bottomLine += lineEnd
  }


  switch (method) {
    case "fifo":
      generateFIFOScheduling()
      break

    case "sjf":
      generateSJFScheduling()
      break

    case "srtf":
      generateSRTFScheduling()
      break

    case "rr":
      generateRRScheduling()
      break
    
    default:
      return console.log(helpMessage)
  }

  const topCap = new Array(topLine.length).fill("_").join("")
  const bottomCap = new Array(topLine.length).fill("‾").join("")

  console.log(topCap)
  console.log(topLine)
  console.log(bottomLine)
  console.log(bottomCap)
}

schedule("rr", [
  {procNumber: 1, start: 0, duration: 3},
  {procNumber: 2, start: 2, duration: 5},
  {procNumber: 3, start: 4, duration: 8},
  {procNumber: 4, start: 6, duration: 2},
], 3)