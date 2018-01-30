import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ teksti, funktio }) => {
  console.log(funktio)
  return (
    <button onClick={funktio}>
      {teksti}
    </button>
  )
}

const Statistics = ({ arvosana, montako }) => {
  return (
    <div>{arvosana + ": " + montako}</div>
  )
}

const Statistic = ({ muuttuja, summa, maara }) => {
  return (
    <div>{muuttuja + ": " + summa / maara}</div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      maara: 0
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <Button teksti="Hyvä" funktio={() => { this.setState({ hyva: this.state.hyva + 1 }) }} />
          <Button teksti="Neutraali" funktio={() => { this.setState({ neutraali: this.state.neutraali + 1 }) }} />
          <Button teksti="Huono" funktio={() => { this.setState({ huono: this.state.huono + 1 }) }} />
          <h2>Tilasto</h2>
          <Statistics arvosana="Hyvä" montako={this.state.hyva} />
          <Statistics arvosana="Neutraali" montako={this.state.neutraali} />
          <Statistics arvosana="Huono" montako={this.state.huono} />
          <Statistic muuttuja="Keskiarvo"
            summa={this.state.hyva * 1 + this.state.huono * (-1)}
            maara={this.state.hyva + this.state.huono + this.state.neutraali} />
          <Statistic muuttuja="Positiivisia"
            summa={this.state.hyva}
            maara={this.state.hyva + this.state.huono + this.state.neutraali} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
