const TotalExr = ({ courses, id }) => {
    const course = courses.find(course => course.id === id)
    const result = course.parts.reduce(
      (total, currentValue) => total + currentValue.exercises,
      0
    )
  
    return (
      <>
        <p><b>total of {result} exercises</b></p>
      </>
    )
  }

export default TotalExr