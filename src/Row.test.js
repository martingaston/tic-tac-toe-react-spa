import React from 'react'
import Row from './Row'
import {
    render,
    fireEvent,
    cleanup,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)