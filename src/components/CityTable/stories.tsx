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
    [2,"New York City","United States","1,390",803,257,66,7,2,"1,398"],
    [1,"Hong Kong","China",820,555,317,64,6,0,820]
  ]
}