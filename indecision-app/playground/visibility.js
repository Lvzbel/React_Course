const appRoot = document.querySelector("#app");

let visibility = false;

const showMore = () => {
  visibility = !visibility;
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility</h1>
      <button onClick={showMore}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && (
        <div>
          <p>Hello Rodrigo Coto</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp()
