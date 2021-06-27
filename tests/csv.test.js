const toCsv = require('../formatters/csv')
const test = require('ava')

test('Generates CSV with default comma delimiter', async (t) => {
    const input = [
        { name: 'Package A', version: '5.2.1' },
        { name: 'Package B', version: '0.2'}
    ]
    const actual = await toCsv(input)
    const [header, packageA, packageB, ...rest] = actual.split(/\r?\n/)

    t.is(header, '"name","version"')
    t.is(packageA, '"Package A","5.2.1"')
    t.is(packageB, '"Package B","0.2"')
    t.deepEqual(rest, [])
})

test('Generates CSV with passed in delimiter', async (t) => {
    const input = [
        { name: 'Package A', version: '5.2.1' },
    ]
    const actual = await toCsv(input, ';')
    const [header, ...rest] = actual.split(/\r?\n/)

    t.is(header, '"name";"version"')
    t.is(rest.length, 1)
})

test('Returns empty output on error', async(t) => {
    const invalidInput = {
        prev: 'Previous',
        next: 'Next'
    }
    invalidInput.next = invalidInput;
    const actual = await toCsv(invalidInput);

    t.is(actual, '')
})
