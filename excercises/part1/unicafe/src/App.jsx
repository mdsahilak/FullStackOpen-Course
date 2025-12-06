import { useState } from 'react'

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <p> {text}: {value} </p>
    </>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad

  const average = (good - bad) / total
  const positive = (good / total) * 100

  if (total === 0) {
    return (
      <div>
        <p> No feedback given </p>
      </div>
    )
  } else {
    return (
      <div>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="Positive" value={positive} />
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}> {props.text} </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1> Unicafe Feedback </h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <h3> Statistics </h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App