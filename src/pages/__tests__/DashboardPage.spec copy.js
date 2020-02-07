import React from 'react'
import { render } from '@testing-library/react'
import LoginPage from '../LoginPage'

test('renders login heading', () => {
  const { getByText } = render(<LoginPage />)
  const header = getByText(/Login/i)
  expect(header).toBeInTheDocument()
})
