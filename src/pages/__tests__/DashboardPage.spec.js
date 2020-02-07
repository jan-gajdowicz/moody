import React from 'react'
import { render } from '@testing-library/react'
import DashboardPage from '../DashboardPage'

test('renders dashboard heading', () => {
  const { getByText } = render(<DashboardPage />)
  const header = getByText(/Dashboard/i)
  expect(header).toBeInTheDocument()
})
