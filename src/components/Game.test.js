import React from 'react'
import Game from './Game'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('a Game component', () => {
  describe('in human v human mode', () => {
    it('can play a complete game where X wins', () => {
      const { getByText, getByLabelText } = render(<Game mode="human" />)
      const crossMoves = [1, 2, 3]
      const noughtMoves = [4, 5]

      combineAlternating(crossMoves, noughtMoves).forEach(move =>
        fireEvent.click(getByLabelText(`Square ${move}`))
      )

      expect(getByText('Player X wins!')).toBeInTheDocument()
    })
  })
})

afterEach(cleanup)

const combineAlternating = (current, alternate, combined = []) => {
  if (current.length === 0) {
    return combined.concat(alternate)
  }

  return combineAlternating(
    alternate,
    tail(current),
    combined.concat(head(current))
  )
}

const head = array => array.slice(0, 1)

const tail = array => array.slice(1)
