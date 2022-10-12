/**
 * This is the string blowup program
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-11
 */

import promptSync from 'prompt-sync'

// constants
const prompt = promptSync()

// Input
const userInput = prompt('Enter any string with numbers: ')

// Proccess
const logic1 = userInput.split('')
const logic2 = []

// loop counter
for (let count = 0; count < logic1.length; count++) {
  const newString = logic1[count]
  let string = ''
  if (isNaN(Number(newString))) {
    if (count - 1 !== -1) {
      if (isNaN(Number(logic1[count - 1]))) {
        string = newString
        logic2.push(string)
      }
    } else {
      string = newString
      logic2.push(string)
    }
  } else {
    if (logic1[count + 1] !== undefined) {
      for (let count2 = 0; count2 < Number(newString); count2++) {
        string = string.concat(logic1[count + 1])
      }
    }
    if (isNaN(Number(logic1[count + 1]))) {
      count = count + 1
    }

    logic2.push(string)
  }
}

// Output
const finalOutput = logic2.join('')
console.log(finalOutput)

console.log('\nDone.')
