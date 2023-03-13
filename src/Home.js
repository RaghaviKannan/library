import React from 'react'

function Home() {
  return (
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="d-flex align-items-center">Nova</h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="index.html" className="active">Home</a></li>
              <li><Link to="/books">Books</Link></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Home