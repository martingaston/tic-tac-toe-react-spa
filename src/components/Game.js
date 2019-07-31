import React, { useState } from 'react'
import Row from './Row'
import { splitEvery } from 'ramda'
import update from '../game/update'
import init from '../game/init'

const createRows = (board, onClick) =>
  splitEvery(3, board).map((row, index) => (
    <Row key={index} row={index + 1} squares={row} onClick={onClick} />
  ))

const message = ({ isActive, messages }) =>
  isActive ? messages.turn : messages.ending

const parseBoard = ({ isActive, board }) =>
  isActive ? board : board.map(square => (square === null ? '' : square))

function Game() {
  const [game, updateGame] = useState(init('ai'))
  const board = parseBoard(game)

  const onClick = position => {
    updateGame(update(position, game))
  }

  return (
    <div className="App">
      <div className="board">{createRows(board, onClick)}</div>
      <div className="message">
        <h2>{message(game)}</h2>
      </div>
    </div>
  )
}

export default Game
