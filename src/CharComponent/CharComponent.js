import React from 'react';
import './CharComponent.css';

function CharComponent(props) {
  return (
    <div
      className="CharComponent"
      onClick={props.onLetterClick}>
      {props.letter}
    </div>
  )
}

export default CharComponent;