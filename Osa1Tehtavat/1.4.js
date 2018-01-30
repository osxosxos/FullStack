import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <h1>{kurssi}</h1>
      <div>{osat[0].nimi + " " + osat[0].tehtavia}</div>
      <div>{osat[1].nimi + " " + osat[1].tehtavia}</div>
      <div>{osat[2].nimi + " " + osat[2].tehtavia}</div>
      <div>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
