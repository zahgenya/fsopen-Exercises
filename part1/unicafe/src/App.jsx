import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
  <div>
    <table>
    <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </tbody>
  </table>
  </div>
  )
}

const Statistics = (props) => {

  const sum = props.allScore.reduce((total, number) => total + number, 0);
  const average = sum / props.allScore.length;
  console.log("average is ", average)

  const goodCount = props.allClicks.filter(feedback => feedback === "good").length;
  const totalCount = props.allClicks.length;
  const goodPercentage = (goodCount / totalCount) * 100;

  if (props.allScore.length === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
    <div>
    <p>{props.allClicks.join(",")}</p>
    <h1>Statistics</h1>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.allClicks.length} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={goodPercentage} />
    </div>
  )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setClicks] = useState([])
  const [allScore, setScore] = useState([])

  const handleGood = () => {
    setGood(good + 1)
    setClicks(allClicks.concat("good"))
    setScore(allScore.concat(1))
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setClicks(allClicks.concat("neutral"))
    setScore(allScore.concat(0))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setClicks(allClicks.concat("bad"))
    setScore(allScore.concat(-1))
  }

  return (
    <div>
    <h1>Give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics allClicks={allClicks} allScore={allScore} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App