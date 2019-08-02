describe('The app can draw a game', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('starts with a turn for the cross player', () => {
    cy.contains("Player X's turn")
  })

  it('will let the player play against a minimax opponent for a draw', () => {
    cy.get(selectSquare(1)).click()
    cy.get(selectSquare(4)).click()
    cy.get(selectSquare(3)).click()
    cy.get(selectSquare(8)).click()
    cy.get(selectSquare(9)).click()
  })

  it('will display a draw message', () => {
    cy.contains(/It's a draw!/)
  })
})

describe('The app can lose a game', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('starts with a turn for the cross player', () => {
    cy.contains("Player X's turn")
  })

  it('will let the player play against a minimax opponent for a draw', () => {
    cy.get(selectSquare(1)).click()
    cy.get(selectSquare(4)).click()
    cy.get(selectSquare(2)).click()
  })

  it('will display a message saying player nought has won', () => {
    cy.contains(/O wins!/)
  })

  it('will not let the player click on any squares after the game is over', () => {
    cy.get(selectSquare(9))
      .click()
      .should('be.empty')
  })
})

const selectSquare = number => `button[aria-label="Square ${number}"`
