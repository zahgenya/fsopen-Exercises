const Header = (props) => {
  return (
    <div>
      <h1>This is {course.name} course!</h1>
    </div>
  )
}

const course = {
  name: 'Half Stack application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10,
    id: 1
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
    id: 2
  },
  {
    name: 'State of a component',
    exercises: 14,
    id: 3
  }
]
}

let totalEx = 0;

function countTotalEx(arr) {
  for (let i = 0; i < arr.length; i++) {
    totalEx += arr[i].exercises;
  }
}
countTotalEx(course.parts)

console.log(totalEx)

const Total = () => {
  return (
    <div>
      <p>Total exercises is: {totalEx}</p>
    </div>
  )
}

const Content = () => {

return (
  <div>
    <p>Part 1: {course.parts[0].name}</p>
    <ul>
      <li>
      number of exercises: {course.parts[0].exercises}
      </li>
    </ul>
    <p>Part 2: {course.parts[1].name}</p>
    <ul>
      <li>
      number of exercises: {course.parts[1].exercises}
      </li>
    </ul>
    <p>Part 3: {course.parts[2].name}</p>
    <ul>
      <li>
      number of exercises: {course.parts[2].exercises}
      </li>
    </ul>
  </div>
)
}


const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App