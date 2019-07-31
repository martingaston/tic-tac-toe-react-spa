import React from 'react'

const Square = ({ position, value, onClick }) => (
  <button
    onClick={value !== null ? null : () => onClick(position)}
    aria-label={`Square ${position}`}
    className={
      value === null
        ? 'square available'
        : value === 'X'
        ? 'square player-one'
        : 'square player-two'
    }
  >
    {value}
  </button>
)

export default Square