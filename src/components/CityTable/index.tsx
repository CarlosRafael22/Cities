import * as Style from './styles'

export type CityProps = {
  city: string,
  country: string,
  buildings: number,
  plus100: number,
  plus150: number,
  plus200: number,
  plus300: number,
  telecomTowers: number,
  totalStructures: number
}

export type CityTableProps = {
  cities: Array<Array<string | number>>
}

const CityTable = ({ cities }: CityTableProps) => (
  <Style.Table>
    {cities.map(city => (
      <Style.Row>
        {city.map(data => (
          <Style.Data>{data}</Style.Data>
        ))}
      </Style.Row>
    ))}
  </Style.Table>
)
export default CityTable