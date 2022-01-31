import { Cell } from './Cell'

type Props = {
  guess: string
}

export const CurrentRow = ({ guess }: Props) => {
  //Keep Dh and Kh together
  const splitGuess = guess.split('')
  var split: string[] = []
  splitGuess.forEach((letter, i) => {
    if (letter === "D" && splitGuess[i + 1] === "h") {
      split[split.length] = "Dh"
    } else if (letter === "K" && splitGuess[i + 1] === "h") {
      split[split.length] = "Kh"
    } else if (letter === "S" && splitGuess[i + 1] === "h") {
      split[split.length] = "Sh"
    } else if (letter !== "h") {
      split[split.length] = letter
    }
  })
  const emptyCells = Array.from(Array(5 - split.length))

  return (
    <div className="flex justify-center mb-1">
      {split.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
