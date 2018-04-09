const processus = require('./processus')

let date = new Date()

let process = processus.filter((process) => {
  // Remove past processes
  return process.deadline >= date.getTime()
}).sort((a, b) => {
  let deltaA = (1 - a.loadAverage) * (a.deadline - date.getTime())
  let deltaB = (1 - b.loadAverage) * (b.deadline - date.getTime())
  return deltaA - deltaB
})

console.log('Least Slack Scheduling :')
console.log('All processes')
console.log(processus)
console.log('Choosen process :')
console.log(process[0])
