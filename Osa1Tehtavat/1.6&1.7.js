import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      maara: 0
    }
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      maara: this.state.maara + 1
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      maara: this.state.maara + 1
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      maara: this.state.maara + 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <button onClick={this.klikHyva}>Hyvä</button>
          <button onClick={this.klikNeutraali}>Neutraali</button>
          <button onClick={this.klikHuono}>Huono</button>
          <h2>Tilasto</h2>
          <div>hyvä: {this.state.hyva} </div>
          <div>neutraali: {this.state.neutraali} </div>
          <div>huono: {this.state.huono} </div>
          <div>keskiarvo: {(this.state.neutraali * 0
            + this.state.hyva * 1 + this.state.huono * -1) / this.state.maara}</div>
          <div>positiivisia: {this.state.hyva / this.state.maara}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
