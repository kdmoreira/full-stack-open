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
  <br/>
  <p1>all {props.all}</p1>
  <br/>
  <p1>average {props.average}</p1>
  <br/>
  <p1>positive {props.positive}%</p1>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const statistics = (good, bad) => {
    const updatedAll = all + 1
    setAll(updatedAll)

    const updateAverage = (good - bad) / updatedAll
    setAverage(updateAverage)

    const updatePositive = (good * 100) / updatedAll
    setPositive(updatePositive)
  }

  const increaseGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    statistics(updatedGood, bad)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    statistics(good, bad)
  }

  const increaseBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    statistics(good, updatedBad)
  }

  return (
    <div>
    <Title />
    <Button handleClick={increaseGood} text='good' />
    <Button handleClick={increaseNeutral} text='neutral' />
    <Button handleClick={increaseBad} text='bad' />
    <Statistics good={good} neutral={neutral} bad={bad} all={all}
      average={average} positive={positive}/>
    </div>
  )
}

export default App