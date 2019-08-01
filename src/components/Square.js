import React from 'react'
import { EMPTY_SQUARE, PLAYER_CROSS_MARK } from '../constants'

const Square = ({ zeroIndexedPosition, value, onClick }) => {
  const position = numberToOneIndex(zeroIndexedPosition)
  return (
    <button
      onClick={value !== EMPTY_SQUARE ? null : () => onClick(position)}
      aria-label={`Square ${position}`}
      className={
        value === null
          ? 'square available'
          : value === PLAYER_CROSS_MARK
          ? 'square player-one'
          : 'square player-two'
      }
    >
      {value}
    </button>
  )
}

const numberToOneIndex = x => x + 1

export default Square
