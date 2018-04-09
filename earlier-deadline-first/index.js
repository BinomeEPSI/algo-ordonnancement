const processus = require('./processus')

let date = new Date()

module.exports.solver = () => {
  return processus.filter((process) => {
    // Remove past processes
    return process.deadline >= date.getTime()
  }).sort((a, b) => {
    // Return the process with the shortest echeance
    return a.deadline - b.deadline
  })[0] // The first item is the one to run
}

if (process.env.NODE_ENV !== 'test') {
  console.log('Earlier Deadline First :')
  console.log('All processes')
  console.log(processus)
  console.log('Choosen process :')
  console.log(module.exports.solver())
}
