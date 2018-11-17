import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      // This is how I had it originally but I refactored it
      // onClick={e => {
      //   props.handleDeleteOption(props.optionText);
      // }}
      onClick={props.handleDeleteOption(props.optionText)}
    >
      remove
    </button>
  </div>
);

export default Option;
