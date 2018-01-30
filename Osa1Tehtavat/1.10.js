import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  asetaHyva = (arvo) => {
    return () => {
      this.setState({ hyva: arvo })
    }
  }

  asetaNeutraali = (arvo) => {
    return () => {
      this.setState({ neutraali: arvo })
    }
  }

  asetaHuono = (arvo) => {
    return () => {
      this.setState({ huono: arvo })
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <button onClick={this.asetaHyva(this.state.hyva + 1)}>
            Hyvä
          </button>
          <button onClick={this.asetaNeutraali(this.state.neutraali + 1)}>
            Neutraali
          </button>
          <button onClick={this.asetaHuono(this.state.huono + 1)}>
            Huono
          </button>
          <h2>Tilasto</h2>
          <div>Hyvä: {this.state.hyva}</div>
          <div>Neutraali: {this.state.neutraali}</div>
          <div>Huono: {this.state.huono}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
