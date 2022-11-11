/**
 * This is the string blowup program
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-11
 */

import promptSync from 'prompt-sync'

/**
 * The function prints the original string replaced by
 * that many occurrences of the digit to the right of the string
 *
 * @param {string} string from the user
 * @returns {string} string that blowup numbers to letters
 */

// constants
const prompt = promptSync()

// Input
const userInput = prompt('Enter any string with numbers: ')

// Proccess
function blowUp(string: string): string {
  let logic = []
  const finalLogic = []
  let firstString: string
  let secondString: string
  let firstInt: number = -1
  let secondInt: number = -1
  logic = Array.from(string)

  // loop counter
  for (let count = 0; count < logic.length; count++) {
    firstString = logic[count]
    firstInt = parseInt(firstString)
    if (count + 1 != logic.length) {
      secondString = logic[count + 1]
      secondInt = parseInt(secondString)
      if (isNaN(firstInt)) {
        finalLogic.push(firstString)
        continue
      } else if (Number.isInteger(firstInt) && Number.isInteger(secondInt)) {
        continue
      } else {
        for (let i = 0; i < firstInt; i++) {
          finalLogic.push(secondString)
        }
        continue
      }
      // if the secondString
    } else {
      if (isNaN(firstInt)) {
        finalLogic.push(firstString)
      } else {
        continue
      }
    }
  }

  const finalOutput = finalLogic.join('')
  return finalOutput
}

// output
let newString: string
if (userInput !== '') {
  newString = blowUp(userInput)
  console.log(newString)
} else {
  console.log('\nInsert a string with a number.')
}
console.log('\nDone.')
