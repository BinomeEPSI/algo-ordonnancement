const { it, describe } = require('mocha')
const expect = require('chai').expect

const earlierDeadline = require('./earlier-deadline-first/index')

const processus = require('./processus')
const leastSlackScheduling = require('./least-slack-scheduling/index')

describe('Tests', function () {
  it('should validate Earlier Deadline First', function () {
    expect(earlierDeadline.solver()).deep.equal(processus[2])
  })

  it('should validate Least Slack Scheduling', function () {
    expect(leastSlackScheduling.solver()).deep.equal(processus[4])
  })
})
