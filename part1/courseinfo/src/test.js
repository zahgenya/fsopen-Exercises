  function Content({ name, exercises, id }) {
    return (
      <div>
        <h1>Parts</h1>
        <ul>
          {course.parts.map(parts =>
          <li key={parts}>
            {parts}
          </li>)}
        </ul>
      </div>
    );
  }