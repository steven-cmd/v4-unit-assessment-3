import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(value) {
    this.setState({ input: value });
  }

  handleClick() {
    this.props.filterBooks(this.state.input);
  }

  handleClear() {
    this.setState({ input: "" });
    this.props.reset();
  }

  render() {
    return (
      <div className="search">
        <input
          value={this.state.input}
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button onClick={this.handleClick}>search</button>
        {this.state.input !== "" && (
          <button onClick={this.handleClear}>clear search</button>
        )}
      </div>
    );
  }
}

export default SearchBar;
