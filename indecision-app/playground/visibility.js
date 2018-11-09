class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.showMore = this.showMore.bind(this);
    this.state = {
      visibility: false,
    };
  }

  showMore() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.showMore}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hello Rodrigo Coto</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"));

// const appRoot = document.querySelector("#app");

// let visibility = false;

// const showMore = () => {
//   visibility = !visibility;
//   renderApp()
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility</h1>
//       <button onClick={showMore}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (
//         <div>
//           <p>Hello Rodrigo Coto</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp()
