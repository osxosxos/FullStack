import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.osa} {props.tehtavat}</p>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa osa="Reactin perusteet" tehtavat="10" />
      <Osa osa="Tiedonvälitys propseilla" tehtavat="7" />
      <Osa osa="Komponenttien tila" tehtavat="14" />
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.yhteensa} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto />
      <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

