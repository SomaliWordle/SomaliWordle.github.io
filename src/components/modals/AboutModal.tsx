import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Waxaan waa maxay?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Gaymkaan wuxuu yahay gaymka caanka ah oo la yirahdo 'wordle' oo af-soomaali loo badalay. Koodhka gaymkaan intiisa badan -{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          waxaa laga so qaatay halkaan.
        </a>{' '}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300">Gaymka asalkaa oo luquuda ingiriiska ah  {' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          waxaad ka ciyaarikartaan halkaan
        </a>
      </p>
    </BaseModal>
  )
}
