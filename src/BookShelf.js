import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static PropTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string
  }

  render() {
    const { books, shelfTitle, onChangeShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
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

export default BookShelf
