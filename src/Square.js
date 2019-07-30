import React from 'react'

const Square = ({ position, value, onClick }) => (
    <button onClick={onClick} aria-label={`Square ${position}`} className='square player-one'>
        {value}
    </button>
)

export default Square