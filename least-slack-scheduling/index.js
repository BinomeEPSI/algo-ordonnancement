const processus = require('./processus')

let date = new Date()

module.exports.solver = () => {
  return processus.filter((process) => {
  // Remove past processes
    return process.deadline >= date.getTime()
  }).sort((a, b) => {
    let deltaA = (1 - a.loadAverage) * (a.deadline - date.getTime())
    let deltaB = (1 - b.loadAverage) * (b.deadline - date.getTime())
    return deltaA - deltaB
  })[0]// The first item is the one to run
}

if (process.env.NODE_ENV !== 'test') {
  console.log('Least Slack Scheduling :')
  console.log('All processes')
  console.log(processus)
  console.log('Choosen process :')
  console.log(module.exports.solver())
}
