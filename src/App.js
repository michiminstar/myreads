import React, { Component } from 'react'
import ListBooks from './ListBooks'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.state = { books: [] }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  }

  render() {
    const { books } = this.state
    const currentlyReading = books.filter((book)=> book.shelf === 'currentlyReading')
    const wantToRead = books.filter((book)=> book.shelf === 'wantToRead')
    const read = books.filter((book)=> book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <BookShelf
                  books={currentlyReading}
                  shelfTitle='Currently Reading'
                  onSelectShelf={this.updateShelf}
                />
                <BookShelf
                  books={wantToRead}
                  shelfTitle='Want to Read'
                  onSelectShelf={this.updateShelf}
                />
                <BookShelf
                  books={read}
                  shelfTitle='Read'
                  onSelectShelf={this.updateShelf}
                />
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            </div>
          </div>
        )} />
        <Route path="/search" component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
