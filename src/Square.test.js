import React from 'react'
import Square from '../src/Square'
import {
    render,
    fireEvent,
    cleanup,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('the Square component', () => {
    it('can render an empty square', () => {
        const { getByLabelText } = render(<Square position='1' value='' />)

        const square = getByLabelText('Square 1')
        expect(square).toBeEmpty()
    })

    it('will let you click on an empty square', () => {
        const onClick = jest.fn()
        const { getByLabelText } = render(<Square position='1' value='' onClick={onClick} />)
        const square = getByLabelText('Square 1')

        fireEvent.click(square)

        expect(onClick).toHaveBeenCalled()
    })

    it('can be rendered with a cross', () => {
        const { getByLabelText } = render(<Square position='1' value='X' />)

        const square = getByLabelText('Square 1')

        expect(square).toHaveTextContent('X')
    })
})