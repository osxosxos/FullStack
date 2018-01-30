import React from 'react'
import ReactDOM from 'react-dom'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      luku: 0
    }
  }

  asetaArvoon = (arvo) => {
    return () => {
      this.setState({ luku: arvo })
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.asetaArvoon(getRandomInt(6))}>
          Random anekdootti
        </button>
        <div>{this.props.anecdotes[this.state.luku]}</div>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)


