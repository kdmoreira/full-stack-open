import { useState } from 'react'

const Title = () => <h1>give feedback</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = all != 0 ? (good - bad) / all : 0
  const positive = all != 0 ? (good * 100) / all : 0

  return (
    <div>
      <h1>statistics</h1>
      <p1>good {good}</p1>
      <br />
      <p1>neutral {neutral}</p1>
      <br />
      <p1>bad {bad}</p1>
      <br />
      <p1>all {all}</p1>
      <br />
      <p1>average {average}</p1>
      <br />
      <p1>positive {positive}%</p1>
    </div>)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App