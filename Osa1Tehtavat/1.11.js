import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ teksti, funktio }) => (
  <button onClick={funktio}>
    {teksti}
  </button>
)

const Statistics = ({ arvosana, montako }) => (
  <div>{arvosana + ": " + montako}</div>
)

const Statistic = ({ muuttuja, summa, maara }) => (
  <div>{muuttuja + ": " + summa / maara}</div>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
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
          <table>
            <tr>
              <td>Hyvä:</td>
              <td>{this.state.hyva}</td>
            </tr>
            <tr>
              <td>Neutraali:</td>
              <td>{this.state.neutraali}</td>
            </tr>
            <tr>
              <td>Huono: </td>
              <td>{this.state.huono}</td>
            </tr>
            <tr>
              <td>Positiivisia: </td>
              <td>{this.state.hyva / (this.state.hyva + this.state.neutraali + this.state.huono)}</td>
            </tr>
            <tr>
              <td>Keskiarvo: </td>
              <td>{(this.state.huono * (-1) + this.state.hyva * 1) / (this.state.huono + this.state.hyva + this.state.neutraali)}</td>
            </tr>

          </table>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
