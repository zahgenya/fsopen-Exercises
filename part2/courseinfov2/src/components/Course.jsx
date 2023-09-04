const Course = ({ courses, id }) => {
    const course = courses.find(course => course.id === id)
    return (
      <>
        {course ? (
          course.parts.map(parts => (
            <p key={parts.id}>{parts.name} {parts.exercises}</p>
          ))
        ) : (
          <p>ERROR: Course Not Found</p>
        )}
      </>
    )
  }

export default Course