const fs = require('fs')
import neatCsv from 'neat-csv'

const handler = async (req, res) => {
    console.log('query: ', req.query)

    fs.readFile('./pages/cities.csv', async (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        const cities = await neatCsv(data)
        console.log(cities)
        res.status(200).json({ cities })
      })
  }

export default handler