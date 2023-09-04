import Course from "./components/Course"
import TotalExr from "./components/TotalExr"
import Header from "./components/Header"

const App = () => {
  const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Header courses={courses} id={1} />
      <Course courses={courses} id={1} />
      <TotalExr courses={courses} id={1}/>
      <Header courses={courses} id={2} />
      <Course courses={courses} id={2} />
      <TotalExr courses={courses} id={2} />
    </div>
  )
}

export default App