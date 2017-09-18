import React, { Component } from 'react'

class Book extends Component {

  render() {
    const { book, changeShelf } = this.props

    return (
      <li>
        <div className='book'>
          <div className="book-top">
            <div className="book-cover" style={{
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }} />
            <div className="book-shelf-changer">
              <select defaultValue={book.shelf} onChange={ (event) => changeShelf(book, event.target.value) } >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors
              ? book.authors.join(', ')
              : ''
            }
          </div>
        </div>
      </li>
    )
  }

}

export default Book
