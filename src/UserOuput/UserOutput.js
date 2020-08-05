import React from 'react';
import './UserOutput.css'

function userOutput(props) {
  return (
    <div className="UserOutput">
      <p>Some random text: </p>
      <p>{props.username}</p>
    </div>
  );
}

export default userOutput;
