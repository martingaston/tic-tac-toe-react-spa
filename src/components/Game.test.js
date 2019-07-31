import React from 'react'
import Game from './Game'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('a Game components', () => {
  describe('in human v human mode', () => {
    it('can play a complete game where X wins', () => {
      const { getByText, getByLabelText } = render(<Game mode="human" />)
      const squareOne = getByLabelText('Square 1')
      const squareTwo = getByLabelText('Square 2')
      const squareThree = getByLabelText('Square 3')
      const squareFour = getByLabelText('Square 4')
      const squareFive = getByLabelText('Square 5')

      fireEvent.click(squareOne) // X's turn
      fireEvent.click(squareFour) // O's turn
      fireEvent.click(squareTwo) // X's turn
      fireEvent.click(squareFive) // O's turn
      fireEvent.click(squareThree) // X's turn

      expect(getByText('Player X wins!')).toBeInTheDocument()
    })
  })
})
