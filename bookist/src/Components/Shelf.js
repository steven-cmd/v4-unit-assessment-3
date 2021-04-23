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
      <div class="shelf">
        <h3>Your Shelf</h3>
        <button
          className="clear-shelf"
          onClick={() => {
            this.props.clearShelf();
          }}
        >
          clear shelf
        </button>
        {this.props.shelf.length === 0 && (
          <p>Click on a book cover to add something. 😩</p>
        )}
        {mappedTitles}
      </div>
    );
  }
}

export default Shelf;
