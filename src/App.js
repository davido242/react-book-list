import React, { useState, useEffect } from 'react';
import './App.css';
import Views from './components/Views';
import DeleteIcon from "./assests/icons/delete.svg";

function App() {

  const getDataFromLS = () => {
    const data = localStorage.getItem("books");
    if(data) {
      return JSON.parse(data);
    }else {
      return []
    }
  }
  // create a state object to hold the properties of the inputs:
  const [books, setBooks] = useState(getDataFromLS());

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  
  const handleAddBook = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      title,
      author,
      isbn
    }
    setBooks([...books, book]);
    setTitle("");
    setAuthor("");
    setIsbn("");
  }
  
  useEffect(()=> {
    localStorage.setItem("books", JSON.stringify(books));
  },[books]);

  const deleteBook = (isbn) => {
    const filteredItem = books.filter((element, index) =>{
      return element.isbn !== isbn
    })
    setBooks(filteredItem);
  }

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and View your books using local storage</p>
      <div className='main md:flex mt-8 items-center'>
        <div className='form-container'>
          <form  className='form-group' onSubmit={handleAddBook}>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" required />
            <br /><br />
            <label>Author</label>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} className="form-control" required />
            <br /><br />
            <label>ISBN#</label>
            <input type="text" onChange={(e) => setIsbn(e.target.value)} value={isbn} className="form-control" required />
            <br /><br />
            <button type='submit' className='bg-green-800 hover:bg-green-600 my-4 py-4'>Add</button>
          </form>
        </div>
        <div className='view-container'>
          <div>
            <table>
              <th className='flex gap-12'>
                <td>ISBN</td>
                <td>Title</td>
                <td>Author</td>
                <td>Delete</td>
              </th>
              <tb>
                <Views books={books} deleteBook={deleteBook} />
              </tb>
            </table>
          </div>
          {books.length < 1 && <div className='py-4'>No books added yet</div>}
          <div className='text-center bg-red-700 hover:bg-red-400 text-white rounded'>
            <button onClick={()=> setBooks([])} className="flex py-4 items-center justify-center"> 
            <img src={DeleteIcon} alt="DeleteIcon" />Remove ALl Books</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;