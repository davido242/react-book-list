import React, { useState } from 'react';
import './App.css';

function App() {

  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  
  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and View your books using local storage</p>
      <div className='main md:flex mt-8 items-center'>
        <div className='form-container'>
          <form  className='form-group'>
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
        {title}
        </div>
      </div>
    </div>
  );
}

export default App;