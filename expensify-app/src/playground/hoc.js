// Higher Order Component (HOC) - A component that renders another component
console.log("Testing from HOC");

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

// requiredAuthentication
const requireAuthentication = WrappedComponent => {
  return (props) => (
    <div>
    {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please logging</p>}
    </div>
  )
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="This is the details" />,
  document.getElementById("app")
);
