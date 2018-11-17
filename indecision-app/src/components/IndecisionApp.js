import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // ==========================================
  // Handler Functions
  // ==========================================

  // Will delete all options
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  // Will delete a single selected option
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  // Will ramdonly pick an option
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  // Option validation agaist duplicates or empty entries
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.includes(option)) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  // Remove the selected option picked by the ramdon generator
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  // ==========================================
  // LifeCycle Components
  // ==========================================

  // Upon loading checks if local data is present
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothing
    }
  }

  // Every time data is changed it will be saved to local storage
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  // This method will be hardly use, but it fires when a new page is render or a whole component will be unmounted menaning we are redendering something new into our app root
  componentWillUnmount() {
    console.log("component will umount");
  }

  // ==========================================
  // Render Template
  // ==========================================
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
