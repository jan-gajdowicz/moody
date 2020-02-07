import React from 'react'
import { render } from '@testing-library/react'
import HomePage from '../HomePage'

test('renders header text', () => {
  const { getByText } = render(<HomePage />)
  const header = getByText(/Hi, I am Moody/i)
  expect(header).toBeInTheDocument()
})
