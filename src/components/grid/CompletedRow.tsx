import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess)
  var split: string[] = []
  guess.split('').forEach((letter, i) => {
    if (letter === "D" && guess[i + 1] === "h") {
      split[split.length] = "Dh"
    } else if (letter === "K" && guess[i + 1] === "h") {
      split[split.length] = "Kh"
    } else if (letter === "S" && guess[i + 1] === "h") {
      split[split.length] = "Sh"
    } else if (letter !== "h") {
      split[split.length] = letter
    }
  })

  return (
    <div className="flex justify-center mb-1">
      {split.map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
      ))}
    </div>
  )
}
