import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooks extends Component {

  static PropTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  render() {
    const { books, onChangeShelf, onSearchBooks } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={ (event) => onSearchBooks(event.target.value, 30)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { books.map((book) => (
              <Book
                key={book.id}
                book={book}
                changeShelf={onChangeShelf}
              />
            )) }
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchBooks
