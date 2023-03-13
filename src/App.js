import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Books from './Books';
import Addbook from './Addbook';
import Viewbook from './Viewbook';
import Editbook from './Editbook';
function App() {
  return (
    <BrowserRouter>
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to='/'><h1 className="d-flex align-items-center">Library Management</h1></Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="index.html" className="active">Home</a></li>
              <li><Link to="/books">Books</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/books/add-book' element={<Addbook/>}></Route>
        <Route path='/books/view-book/:id' element={<Viewbook/>}></Route>
        <Route path='/books/edit-book/:id' element={<Editbook/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
