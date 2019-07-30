import React from 'react'
import Square from './Square'

const Row = ({ squares, row = 1, onClick }) => (
    <div className='row'>
        {generateRowSquares(squares, row, onClick)}
    </div>
)

const generateRowSquares = (squares, row, onClick) => squares.map((square, index) => <Square key={index} onClick={onClick} position={calculatePosition(row, index)} value={square} />)

const calculatePosition = (row, index) => {
    const multiplier = (row - 1) * 3
    return multiplier + index + 1
}

export default Row