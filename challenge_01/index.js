const fs = require('fs/promises')
const path = require('path')

// Large Solution
function countWords(text) {
  const values = text.toLowerCase().split(' ')

  const valuesMap = {}

  for (const value of values) {
    if (valuesMap[value] === undefined) {
      valuesMap[value] = 0
    }

    valuesMap[value]++
  }

  return valuesMap
}

/**
 * Short Solution
 */
function countWordsTwo(text) {
  return text
    .toLowerCase()
    .split(' ')
    .reduce(
      (acc, value) => ({
        ...acc,
        [value]: (acc[value] ?? 0) + 1,
      }),
      {}
    )
}

function formatCountWords(object) {
  return Object.entries(object).reduce((acc, value) => {
    const [word, count] = value

    return `${acc}${word}${count}`
  }, '')
}

;(async function () {
  // TEST MY CODE
  const message = await fs.readFile(path.resolve(__dirname, 'message_01.txt'), {
    encoding: 'utf-8',
  })

  console.log(formatCountWords(countWords(message)))
  console.log(formatCountWords(countWordsTwo('keys house HOUSE house keys')))
})()
