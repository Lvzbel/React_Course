import React from 'react';

const Project = (props) => (
  <div>
  <h2>A Thing I've Done</h2>
  <p>This is a page for the item with id of {props.match.params.id}</p>
</div>
);

export default Project;