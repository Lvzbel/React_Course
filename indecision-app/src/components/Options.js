import React from 'react';
import Option from './Option';

const Options = (props) => {
  const options = props.options.map((option) => (
    <Option
      key={option}
      optionText={option}
      handleDeleteOption={props.handleDeleteOption}
    />
  ));
  
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add an option to get started!</p>}
      {options}
    </div>
  );
};

export default Options;