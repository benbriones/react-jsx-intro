"use strict";

function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>Learn some information about this Person</p>
      <p>Name:{name.length > 8 ? name.slice(0, 6) : name}</p>
      <p>Age: {age}</p>

      {age > 18? <h4>Please go vote!</h4> : <h4>You must be 18!</h4> }

      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>

    </div>
  );
}