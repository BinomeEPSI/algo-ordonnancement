let date = new Date()

module.exports = [
  { pid: 1, start: date.getTime(), deadline: date.getTime() + 100, command: '/usr/bin/echo process1' },
  { pid: 2, start: date.getTime() - 20, deadline: date.getTime() - 10, command: '/usr/bin/echo process2' },
  { pid: 3, start: date.getTime() + 1, deadline: date.getTime() + 5, command: '/usr/bin/echo process3' },
  { pid: 4, start: date.getTime() + 6, deadline: date.getTime() + 104, command: '/usr/bin/echo process4' }
]
