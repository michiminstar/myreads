import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
      books: [],
      bookResults: []
  }

  // Fetch all book data
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Update the shelf
  // Using an *arrow* function ensures `this` is bound to a component
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      this.getAllBooks()
    })
  }

  // Clear query
  clearQuery = (query) => {
    this.setState({ bookResults: [] })
  }

  // Search books
  searchBooks = (query, maxResults) => {
    (!query) && this.clearQuery()

    query.length > 0 && BooksAPI.search(query, maxResults).then((results) => {
      if(!results.error){
        results.map((result) => {
          let match = this.state.books.filter(book => book.id === result.id)

          if(match.length > 0) {
            return match
          } else {
            return result.shelf = 'none'
          }
        })

        this.setState({ bookResults: results })
      }
    })
  }

  render() {
    const { books, bookResults } = this.state
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    const read = books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <BookShelf
                  books={currentlyReading}
                  shelfTitle='Currently Reading'
                  onChangeShelf={this.changeShelf}
                />
                <BookShelf
                  books={wantToRead}
                  shelfTitle='Want to Read'
                  onChangeShelf={this.changeShelf}
                />
                <BookShelf
                  books={read}
                  shelfTitle='Read'
                  onChangeShelf={this.changeShelf}
                />
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            </div>
          </div>
        )} />

        <Route path="/search" render={() => (
          <SearchBooks
            books={bookResults}
            onChangeShelf={this.changeShelf}
            onSearchBooks={this.searchBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
