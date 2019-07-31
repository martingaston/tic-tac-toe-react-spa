import React from 'react'
import { splitEvery } from 'ramda'
import { BOARD_SIZE, EMPTY_SQUARE, UNCLICKABLE_SQUARE } from '../constants'

const zeroToOneIndex = number => number + 1

const isBoardClickable = ({ isActive, board }) =>
  isActive
    ? board
    : board.map(square =>
        square === EMPTY_SQUARE ? UNCLICKABLE_SQUARE : square
      )

export default (game, RowComponent, onClick) => {
  const rowSize = Math.sqrt(BOARD_SIZE)
  const board = isBoardClickable(game)

  return splitEvery(rowSize, board).map((currentRow, index) => (
    <RowComponent
      key={index}
      row={zeroToOneIndex(index)}
      squares={currentRow}
      onClick={onClick}
    />
  ))
}
