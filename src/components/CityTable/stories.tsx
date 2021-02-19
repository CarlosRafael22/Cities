import { Story, Meta } from '@storybook/react'
import CityTable, { CityTableProps } from '.'

export default {
  title: 'CityTable',
  component: CityTable,
} as Meta

const Template: Story<CityTableProps> = (args) => <CityTable {...args} />

export const Default = Template.bind({})
Default.args = {
  cities: [
    {
      '#': '54',
      City: 'London',
      Country: 'United Kingdom',
      'All\nBuildings': '263',
      '100m+': '59',
      '150m+': '17',
      '200m+': '5',
      '300m+': '1',
      'Telecom\nTowers': '5',
      'All\nStructures': '272'
    },
    {
      '#': '68',
      City: 'Brisbane',
      Country: 'Australia',
      'All\nBuildings': '97',
      '100m+': '60',
      '150m+': '13',
      '200m+': '5',
      '300m+': '0',
      'Telecom\nTowers': '0',
      'All\nStructures': '97'
    },
  ]
}