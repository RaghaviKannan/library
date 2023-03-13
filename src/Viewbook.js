import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewbook() {
  const params = useParams()
  const [book, setBook] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])
  const fetchdata = async()=>{
    const res = await axios.get(`https://640e07481a18a5db83867e7a.mockapi.io/books/${params.id}`)
    setBook(res.data)
    console.log(res.data)
  }
  return (
    <>
      <div className="breadcrumbs d-flex align-items-center">
        <div className="container position-relative d-flex flex-column align-items-center">
          <h2>Details of {book.book_name}</h2>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <label>Book Name :</label>
            <p>{book.book_name}</p>
          </div>
          <div className='col-lg-4'>
            <label>Author Name :</label>
            <p>{book.auth_name}</p>
          </div>
          <div className='col-lg-4'>
            <label>Publisher Name :</label>
            <p>{book.pub_name}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <label>Publication Date :</label>
            <p>{book.pub_date}</p>
          </div>
          <div className='col-lg-4'>
            <label>Total no. of Copies :</label>
            <p>{book.total_copies}</p>
          </div>
          <div className='col-lg-4'>
            <label>Available no. of Copies :</label>
            <p>{book.aval_copies}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <label>Genre :</label>
            <p>{book.genre}</p>
          </div>
          <div className='col-lg-4'>
            <label>Condition :</label>
            <p>{book.condition}</p>
          </div>
          <div className='col-lg-4'>
            <label>Status :</label>
            <p>{book.status}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <label>ISBN :</label>
            <p>{book.isbn}</p>
          </div>
          <div className='col-lg-6'>
            <label>Description :</label>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Viewbook