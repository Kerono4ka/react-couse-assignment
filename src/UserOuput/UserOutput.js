import React from 'react';
import './UserOutput.css';
import ValidationComponent from '../ValidationComponent/ValidationComponent';
import CharComponent from '../CharComponent/CharComponent';

function userOutput(props) {
  const {text} = props;
  let letters = [];

  if (props.text.length) {
    const uniqueLetters = new Set(text.toLowerCase().replace(/[^a-z]/g, ''));
    uniqueLetters.forEach((letter) =>
      letters.push(<CharComponent
        key={letter}
        letter={letter}
        onLetterClick={() => props.onLetterClick(letter)}/>
      )
    );
  }

  return (
    <div className="UserOutput">
      <p className="userOutputDescription">User input: </p>
      <p>Length: {text.length}</p>
      <ValidationComponent length={text.length} />
      {letters}
    </div>
  );
}

export default userOutput;
