import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { AddBook, EditBook } from './components/BookPages';
import { Book, getBooks } from './data-api/index'


function App() {
  const [books, setBooks] = useState<Book[]>([])
  const [filterBy, setFilterBy] = useState<string>("0")
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])

  useEffect(() => {
    getBooks().then(data => setBooks(data))
  }, [])

  useEffect(() => {
    const filtered = books.filter((book) => {
      const { status } = book
      if (filterBy === "1") return book
      const separate = filterBy === "0" ? "active" : "deactivated"
      if (status === separate) return book
    })
    setFilteredBooks(filtered)
  }, [books, filterBy])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook filteredBooks={filteredBooks} />} />
        <Route path="/" element={<Dashboard books={books} setBooks={setBooks}
          filterBy={filterBy} setFilterBy={setFilterBy} filteredBooks={filteredBooks} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;
