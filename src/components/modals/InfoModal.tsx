import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Sida loo ciyaaro" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        6 tijaabo baad leedahay inaad erey oo qarsoon ku sheegtid.  Tijaabo walba kadib, boosaska midaboohood baa is badalaayo sidaad u fahamtid inta aad u jirtid erayga qarsoon.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" status="correct" />
        <Cell value="A" />
        <Cell value="A" />
        <Cell value="L" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Xarafka W booskii loogu tologalay ayuu ku jiraa.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="U" />
        <Cell value="U" status="present" />
        <Cell value="L" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Xarafka U erayga wuu ku jiraa, laakin boos qaldan baad galisay.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="O" />
        <Cell value="S" />
        <Cell value="O" status="absent" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Xarafka O kuma jiro erayga.
      </p>
    </BaseModal>
  )
}
