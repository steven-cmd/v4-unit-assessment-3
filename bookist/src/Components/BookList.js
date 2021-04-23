import React, { Component } from "react";

class BookList extends Component {
  constructor() {
    super();
  }

  render() {
    let mappedBooks = this.props.books.map((book, index) => {
      return (
        <div key={index}>
          <img
            src={book.img}
            onClick={() => this.props.addToShelf(book.title)}
          ></img>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      );
    });
    return <div>{mappedBooks}</div>;
  }
}

export default BookList;
