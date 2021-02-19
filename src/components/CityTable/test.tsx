import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Default } from './stories'

describe('<CityTable />', () => {
  it('should render the component', () => {
    render(<Default {...Default.args} />)

    expect(
      screen.getByText(Default.args.cities[0]['City'])
    ).toBeInTheDocument()
    expect(
      screen.getByText(Default.args.cities[1]['City'])
    ).toBeInTheDocument()
  })
})