import React, { Component } from 'react'

class Book extends Component {

  render() {
    const { book, changeShelf } = this.props
    console.log(book.shelf)

    return (
      <li>
        <div className='book'>
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
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
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }

}

export default Book
