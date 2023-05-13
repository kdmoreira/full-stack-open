import { useState } from 'react'

const Title = () => <h1>give feedback</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <div>
  <h1>statistics</h1>
  <p1>good {props.good}</p1>
  <br/>
  <p1>neutral {props.neutral}</p1>
  <br/>
  <p1>bad {props.bad}</p1>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
    <Title />
    <Button handleClick={increaseGood} text='good' />
    <Button handleClick={increaseNeutral} text='neutral' />
    <Button handleClick={increaseBad} text='bad' />
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App