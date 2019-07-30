import React from 'react'

const Square = ({ position, value, onClick }) => (
    <button onClick={value ? null : onClick} aria-label={`Square ${position}`} className={value === '' ? 'square available' : value === 'X' ? 'square player-one' : 'square player-two'}>
        {value}
    </button>
)

export default Square