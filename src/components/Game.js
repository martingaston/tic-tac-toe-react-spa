import React, { useState } from 'react'
import Row from './Row'
import update from '../game/update'
import init from '../game/init'
import parseMessage from '../utils/parseMessage'
import parseRows from '../utils/parseRows'

const Game = ({ mode }) => {
  const [game, updateGame] = useState(init(mode))

  const onClick = position => {
    updateGame(update(position, game))
  }

  return (
    <div className="App">
      <div className="board">{parseRows(game, Row, onClick)}</div>
      <div className="message">
        <h2>{parseMessage(game)}</h2>
      </div>
    </div>
  )
}

export default Game
