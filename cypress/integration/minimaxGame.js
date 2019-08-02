describe('when playing a human v minimax game', () => {
  it('starts a game by displaying a message for player X to make a turn', () => {
    cy.visit('/')
    cy.contains("Player X's turn")
  })

  it('can successfully draw against a minimax opponent', () => {
    cy.visit('/')

    const playerCrossMoves = [1, 4, 3, 8, 9]
    playGame(playerCrossMoves)

    cy.contains(/It's a draw!/)
  })

  it('can successfully lose to a minimax opponent', () => {
    cy.visit('/')

    const playerCrossMoves = [1, 4, 2]
    playGame(playerCrossMoves)

    cy.contains(/O wins!/)
  })

  it('will not do anything when players click an unoccupied square after the game is over', () => {
    cy.visit('/')

    const playerCrossMoves = [1, 4, 2]
    playGame(playerCrossMoves)

    cy.get(selectSquare(9))
      .click()
      .should('be.empty')
  })
})

const playGame = moves => {
  moves.forEach(move => cy.get(selectSquare(move)).click())
}

const selectSquare = number => `button[aria-label="Square ${number}"`
