const { it, describe } = require('mocha')
const expect = require('chai').expect

const earlierProcessus = require('./earlier-deadline-first/processus')
const earlierDeadline = require('./earlier-deadline-first/index')

const leastSlackProcessus = require('./least-slack-scheduling/processus')
const leastSlackScheduling = require('./least-slack-scheduling/index')

describe('Tests', function () {
  it('should validate Earlier Deadline First', function () {
    expect(earlierDeadline.solver()).deep.equal(earlierProcessus[2])
  })

  it('should validate Least Slack Scheduling', function () {
    expect(leastSlackScheduling.solver()).deep.equal(leastSlackProcessus[1])
  })
})
