import React from 'react';

function validationComponent(props) {
  return (
    <p>
      {props.length < 5 ? "Text too short" : "Text long enough"}
    </p>
  )
}

export default validationComponent;