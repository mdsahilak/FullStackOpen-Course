import { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const average = (good - bad) / (good + neutral + bad)
  const positive = (good / (good + neutral + bad)) * 100
  
  return (
    <div>
      <h3> Statistics </h3>
      
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p> Average: {average} </p>
      <p> Positive: {positive} % </p>
    </div>
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
      <button onClick={handleGood}> Good </button>
      <button onClick={handleNeutral}> Neutral </button>
      <button onClick={handleBad}> Bad </button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App