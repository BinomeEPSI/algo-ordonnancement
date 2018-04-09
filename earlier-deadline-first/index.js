const processus = require('./processus')

let date = new Date()

let process = processus.filter((process) => {
  // Remove past processes
  return process.deadline >= date.getTime()
}).sort((a, b) => {
  // Return the process with the shortest echeance
  return a.deadline - b.deadline
})

console.log('Earlier Deadline First :')
console.log('All processes')
console.log(processus)
console.log('Choosen process :')
console.log(process[0])
