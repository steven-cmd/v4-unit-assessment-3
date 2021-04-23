import React, { Component } from "react";

class BookList extends Component {
  constructor() {
    super();
  }

  render() {
    let mappedBooks = this.props.books.map((book, index) => {
      return (
        <div className="book" key={index}>
          <img
            className="book-cover"
            src={book.img}
            onClick={() => this.props.addToShelf(book.title)}
          ></img>
          <p>
            {book.title} by {book.author}
          </p>
        </div>
      );
    });
    return <div className="book-list">{mappedBooks}</div>;
  }
}

export default BookList;
