import React from "react";
import Option from "./Option";

const Options = props => {

  // Constructs valid JSX for each option in the array
  // Containing
  // key(required by React)
  // optionText(actual content)
  // count(used to display which number the option is)
  // handleDeleteOption(passing a function to delete a single option)
  const options = props.options.map((option, index) => (
    <Option
      key={option}
      optionText={option}
      count={index + 1}
      handleDeleteOption={props.handleDeleteOption}
    />
  ));

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && <p className="widget-header__message">Add an option to get started!</p>}
      {options}
    </div>
  );
};

export default Options;
