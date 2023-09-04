const Header = ({ courses, id }) => {
    const course = courses.find(course => course.id === id)
    return(
      <>
        <h2>{course ? course.name : "ERROR: Course Not Found"}</h2>
      </>
    )
  }

export default Header