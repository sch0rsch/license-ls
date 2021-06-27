/**
 * Convert an Object to a proper JSON string
 *
 * @param {Array} data
 * @returns {string}
 */
module.exports = function (data = []) {
    try {
        return JSON.stringify(data, null, 2)
    } catch (err) {
        console.warn('There was an error generating the JSON output', err)
        return '[]'
    }
}