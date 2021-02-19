import * as Style from './styles'

export type CityProps = {
  '#': string,
  'City': string,
  'Country': string,
  'All\nBuildings': string,
  '100m+': string,
  '150m+': string,
  '200m+': string,
  '300m+': string,
  'Telecom\nTowers': string,
  'All\nStructures': string
}

export type CityTableProps = {
  cities: Array<CityProps>
}

const CityTable = ({ cities }: CityTableProps) => (
  <Style.Table>
    <Style.Body>
    {cities.map(city => (
      <Style.Row>
        {Object.values(city).map((data, index) => (
          <Style.Data key={`city_${index}`}>{data}</Style.Data>
        ))}
      </Style.Row>
    ))}
    </Style.Body>
  </Style.Table>
)
export default CityTable