import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://640e07481a18a5db83867e7a.mockapi.io/books")
        setBooks(res.data)
    }

    const deletebook = async (id) => {
        const conf = window.confirm("Are you sure you want to delete the book?")
        if (conf) {
            await axios.delete(`https://640e07481a18a5db83867e7a.mockapi.io/books/${id}`)
            alert("Book deleted successfully")
            fetchdata()
        }
    }

    const filteredbooks = books.filter((book)=>
        book.book_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <>
            <div className="breadcrumbs d-flex align-items-center">
                <div className="container position-relative d-flex flex-column align-items-center">
                    <h2>Books</h2>
                </div>
            </div>
            <div className='container'>
                <Link to='/books/add-book' style={{ marginTop: "10px" }} className='btn btn-sm btn-primary'>Add Book</Link>
                <div style={{ marginTop: "10px" }}>
                    <input
                        type="text"
                        placeholder="Search Books"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Genre</th>
                            <th>Status</th>
                            <th>Condition</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        filteredbooks.map((book, key) => {
                            return <tbody key={book.id}>
                                <tr>
                                    <th>{book.id}</th>
                                    <td>{book.book_name}</td>
                                    <td>{book.auth_name}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.status}</td>
                                    <td>{book.condition}</td>
                                    <td>
                                        <Link to={`/books/view-book/${book.id}`} style={{ marginRight: "8px" }} className='btn btn-primary'>View</Link>
                                        <Link to={`/books/edit-book/${book.id}`} style={{ marginRight: "8px" }} className='btn btn-warning'>Edit</Link>
                                        <button onClick={() => deletebook(book.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default Books