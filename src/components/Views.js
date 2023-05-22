import React from 'react';
import DeleteIcon from "../assests/icons/delete.svg";

const Views = ({ books, deleteBook }) => {
  return  books.map(book => (
    <tr key={book.isbn} className="flex gap-12 py-4">
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td className="cursor-pointer" onClick={() => deleteBook(book.isbn)}>
            <img src={DeleteIcon} alt="delete icon" />
        </td>
    </tr>
  ))
}

export default Views
