import React from 'react';

function userInput (props) {
  const style = {
  width: '25%',
  padding: '12px 20px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  }

  return (
    <input
      style={style}
      type='text'
      onKeyPress={props.onKeyPress}
      defaultValue={props.username}
    />
  );
}

export default userInput;
