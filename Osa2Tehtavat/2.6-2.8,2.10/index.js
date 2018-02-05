import React from 'react';
import ReactDOM from 'react-dom'

const Sisalto = ({ henkilot }) => {
  const tiedot = henkilot
  return (
    <div>
      <ul>
        {tiedot.map(henkilo => {
          return <Henkilo key={henkilo.id} henkilo={henkilo} />
        })}
      </ul>
    </div>
  )
}

const Henkilo = ({ henkilo }) => {
  return (
    <li>{henkilo.nimi}: {henkilo.numero}</li>
  )
}

const Lomake = ({ state, lisaaHenkilo, kasitteleNimi, kasitteleNumero }) => {
  return (
    <form onSubmit={lisaaHenkilo}>
      <div>
        nimi: <input
          onChange={kasitteleNimi}
          value={state.kasitteleNimi}
        />
      </div>
      <div>
        numero: <input
          onChange={kasitteleNumero}
          value={state.kasitteleNumero}
        />
      </div>
      <button type="submit">lisää numero</button>
    </form>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      henkilot: [
        {
          nimi: 'Arto Hellas',
          numero: '12345',
          id: 1
        },
        {
          nimi: 'Erkki Esimerkki',
          numero: '54321',
          id: 2
        }
      ],
      kasitteleNimi: '',
      kasitteleNumero: ''
    }
  }
  onkoHenkiloLuettelossa = (nimi) => {
    return this.state.henkilot.find((henkilo) => henkilo.nimi === nimi)
  }

  lisaaHenkilo = (event) => {
    event.preventDefault()
    const uusiHenkilo = {
      nimi: this.state.kasitteleNimi,
      numero: this.state.kasitteleNumero,
      id: this.state.henkilot.length + 1
    }
    const boolean = this.onkoHenkiloLuettelossa(this.state.kasitteleNimi)

    if (!this.onkoHenkiloLuettelossa(this.state.kasitteleNimi)) {
      const henkilot = this.state.henkilot.concat(uusiHenkilo)
      this.setState({
        henkilot,
        kasitteleNimi: '',
        kasitteleNumero: ''
      })
    }
  }

  kasitteleNimi = (event) => {
    this.setState({ kasitteleNimi: event.target.value })
  }

  kasitteleNumero = (event) => {
    this.setState({ kasitteleNumero: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Lomake
          state={this.state}
          lisaaHenkilo={this.lisaaHenkilo}
          kasitteleNimi={this.kasitteleNimi}
          kasitteleNumero={this.kasitteleNumero}
        />
        <h2>Numerot</h2>
        <Sisalto henkilot={this.state.henkilot} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
