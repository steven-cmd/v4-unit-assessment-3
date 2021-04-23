import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import BookList from "./Components/BookList";
import Shelf from "./Components/Shelf";
import data from "./data";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: data,
      shelf: [],
    };

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf(bookToAdd) {
    this.setState({ shelf: [...this.state.shelf, bookToAdd] });
  }

  clearShelf() {
    this.setState({ shelf: [] });
  }

  filterBooks(input) {
    let filtedBooks = this.state.books.filter(
      (book) =>
        book.title.toLowerCase().includes(input.toLowerCase()) ||
        book.author.toLowerCase().includes(input.toLowerCase())
    );

    this.setState({ books: filtedBooks });
  }

  reset() {
    this.setState({ books: data });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <SearchBar
          reset={this.reset}
          filterBooks={this.filterBooks}
        ></SearchBar>
        <div className="main">
          <BookList
            addToShelf={this.addToShelf}
            books={this.state.books}
          ></BookList>
          <Shelf clearShelf={this.clearShelf} shelf={this.state.shelf}></Shelf>
        </div>
      </div>
    );
  }
}

export default App;
