// JSX - JavaScript XML

// If Statements
//  Ternary Operators
//  Logical and Operator
const appRoot = document.querySelector("#app");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSumit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecision()
  }
}

const removeAll = () => {
  app.options = [];
  renderIndecision()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const renderIndecision = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0
          ? "Here are your options"
          : "There are no options"}
      </p>
      <button disabled={app.options.length === 0 } onClick={onMakeDecision}>What should I do</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>
        })}
      </ol>
      <form onSubmit={onFormSumit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderIndecision();

// wagner flexio 9090


// numbers.map((number) => {
//   return <p key={number}>Number: {number}</p>
// })