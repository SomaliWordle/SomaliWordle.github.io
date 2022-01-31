import { solution } from './words'

export type CharStatus = 'absent' | 'present' | 'correct'

export type CharValue =
  | 'Q'
  | 'W'
  | 'E'
  | 'R'
  | 'T'
  | 'Y'
  | 'U'
  | 'I'
  | 'O'
  | 'Kh'
  | 'A'
  | 'S'
  | 'D'
  | 'F'
  | 'G'
  | 'H'
  | 'J'
  | 'K'
  | 'L'
  | 'Dh'
  | 'X'
  | 'C'
  | 'Sh'
  | 'B'
  | 'N'
  | 'M'

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  guesses.forEach((word) => {
    word.split('').forEach((letter, i) => {
      if ((letter === "D" || letter === "S" || letter === "K") && (word[i + 1] === "h")) {
        if (solution[i] === letter && solution[i + 1] === "H") {
          return (charObj[letter + "h"] = 'correct')
        }

        if (!solution.includes(letter + "H")) {
          return (charObj[letter + "h"] = 'absent')
        }

        if (charObj[letter + "h"] !== 'correct') {
          return (charObj[letter] = 'present')
        }
      }

      if (!solution.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === solution[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution: string[] = []
  Array.from(solution.matchAll(/[A-Z]H?/g)).forEach((value) => {
    splitSolution.push(value[0])
  })
  const splitGuess = Array.from(guess.matchAll(/[A-Z]h?/g))

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((match, i) => {
    var letter = match[0].toUpperCase()
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((match, i) => {
    var letter = match[0].toUpperCase()
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
