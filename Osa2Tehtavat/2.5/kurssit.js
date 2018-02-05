import React from 'react'

const Kurssit = ({ kurssit }) => {
  return (
    <div>
      <ul>
        {kurssit.map(kurssi => {
          return <Kurssi k={kurssi} />
        })}
      </ul>
    </div>
  )
}

const Kurssi = ({ k }) => {
  return (
    <div>
      <Otsikko otsikko={k} />
      <Sisalto kurssi={k} />
      <Yhteensa kurssi={k} />
    </div>
  )
}

const Sisalto = ({ kurssi }) => {
  const osat = kurssi.osat
  return (
    <div>
      <ul>
        {osat.map(osa => {
          return <Osa o={osa} />
        })}
      </ul>
    </div>
  )
}

const Yhteensa = ({ kurssi }) => {
  const osat = kurssi.osat
  return (
    <div>
      <ul>
        <div>yhteensä &nbsp;
          {osat.reduce((acc, cur) => {
            acc = acc + cur.tehtavia
            console.log(acc)
            return acc;
          }, 0)}
          &nbsp; tehtävää
        </div>
      </ul>
    </div>
  )
}

const Osa = ({ o }) => {
  return (
    <p>{o.nimi}{" "}{o.tehtavia}</p>
  )
}

const Otsikko = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.otsikko.nimi}</h1>
    </div>
  )
}

export default Kurssit
