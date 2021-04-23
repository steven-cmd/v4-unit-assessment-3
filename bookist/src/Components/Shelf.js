import React, { Component } from "react";

class Shelf extends Component {
  constructor() {
    super();
  }

  render() {
    let mappedTitles = this.props.shelf.map((title, index) => {
      return <p key={index}>{title}</p>;
    });

    return (
      <div>
        {mappedTitles}
        <button
          onClick={() => {
            this.props.clearShelf();
          }}
        >
          clear shelf
        </button>
      </div>
    );
  }
}

export default Shelf;
