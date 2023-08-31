import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const handleAnecdote = () => {
    setSelected(getRandom())
  }

  const getRandom = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  console.log(getRandom())

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  console.log(points)

  const findMostVotedI = () => {
    let maxVotes = 0
    let mostVotedIndex = 0

    for (let i = 0; i < points.length; i++) {
      if (points[i] > maxVotes) {
        maxVotes = points[i]
        mostVotedIndex = i
      }
    }

    return mostVotedIndex
  };

  const mostVotedIndex = findMostVotedI()

  return (
    <div>
    <h1>Anecodte of the day</h1>
      {anecdotes[selected]}<br />
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[mostVotedIndex]}<br />
    has {points[mostVotedIndex]} votes</p>
    </div>
  )
}

export default App