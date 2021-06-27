const toJson = require('../formatters/json')
const test = require('ava')

test('Creates JSON', async (t) => {
    const input = [ { hello: 'world' } ]
    const actual = toJson(input)

    t.deepEqual(JSON.parse(actual), input);
})

test('No input yields an empty array', (t) => {
    const actual = toJson()
    t.deepEqual(JSON.parse(actual), [])
})

test('Invalid input yields an empty array', (t) => {
    const invalidInput = [ { self: undefined } ]
    invalidInput[0].self = invalidInput

    const actual = toJson(invalidInput)
    t.deepEqual(JSON.parse(actual), [])
})