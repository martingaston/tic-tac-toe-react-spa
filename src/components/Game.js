import React from 'react'
import Row from './Row'
import { splitEvery } from 'ramda'

const createRows = board =>
  splitEvery(3, board).map((row, index) => (
    <Row key={index} row={index + 1} squares={row} onClick={console.log} />
  ))

function Game() {
  const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', null]
  return (
    <div className="App">
      <div className="board">{createRows(board)}</div>
      <div className="message">
        <h2>Player X Wins!</h2>
      </div>
    </div>
  )
}

export default Game
