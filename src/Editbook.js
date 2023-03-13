import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Editbook() {
  const { id } = useParams()
  const [book, setBook] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get(`https://640e07481a18a5db83867e7a.mockapi.io/books/${id}`)
    setBook(res.data)
    console.log(res.data)
  }
  const formik = useFormik({
    initialValues: {
      book_name: "",
      auth_name: "",
      pub_name: "",
      pub_date: "",
      total_copies: "",
      aval_copies: "",
      genre: "",
      condition: "",
      status: "",
      isbn: "",
      description: ""
    },
    validate: (values) => {
      const err = {}

      if (!formik.values.book_name) {
        err.book_name = "Please enter the name of the book"
      }
      if (!formik.values.auth_name) {
        err.auth_name = "Please enter the name of the Author"
      }
      if (!formik.values.pub_name) {
        err.pub_name = "Please enter the name of the Publisher"
      }
      if (!formik.values.pub_date) {
        err.pub_date = "Please enter the Published date"
      }
      if (!formik.values.total_copies) {
        err.total_copies = "Please enter the total number of copies"
      }
      if (!formik.values.aval_copies) {
        err.aval_copies = "Please enter the number of available copies"
      }
      if (formik.values.genre == "") {
        err.genre = "Please enter the Genre/Category of the book"
      }
      if (formik.values.condition == "") {
        err.condition = "Please enter the condition of the book"
      }
      if (formik.values.status == "") {
        err.status = "Please enter the status of the book"
      }
      if (formik.values.isbn.length !== 13) {
        err.isbn = "Please enter a valid ISBN number of the book"
      }
      if (!formik.values.description) {
        err.description = "Please enter the Description of the book"
      }
      return err
    },
    onSubmit: async (values) => {
      await axios.put(`https://640e07481a18a5db83867e7a.mockapi.io/books/${id}`, values)
      alert("Book Updated successfully")
      formik.resetForm()
    }
  })
  useEffect(() => {
    if (book) {
      formik.setValues({
        book_name: book.book_name,
        auth_name: book.auth_name,
        pub_name: book.pub_name,
        pub_date: book.pub_date,
        total_copies: book.total_copies,
        aval_copies: book.aval_copies,
        genre: book.genre,
        condition: book.condition,
        status: book.status,
        isbn: book.isbn,
        description: book.description
      })
    }
  }, [book])
  return (
    <>
      <div className="breadcrumbs d-flex align-items-center">
        <div className="container position-relative d-flex flex-column align-items-center">
          <h2>Update Details of {book.book_name} </h2>
        </div>
      </div>
      <div className='container'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-4'>
              <label>Book Name</label>
              <input name="book_name" onBlur={formik.handleBlur} className={`form-control ${formik.touched.book_name && formik.errors.book_name ? "error-box" : ""} ${formik.touched.book_name && !formik.errors.book_name ? "success-box" : ""}`} type={"text"} onChange={formik.handleChange} value={formik.book_name}></input>
              {formik.errors.book_name ? <span style={{ color: "red" }}>{formik.errors.book_name}</span> : null}
            </div>
            <div className='col-lg-4'>
              <label>Author Name</label>
              <input name="auth_name" onBlur={formik.handleBlur} className={`form-control ${formik.touched.auth_name && formik.errors.auth_name ? "error-box" : ""} ${formik.touched.auth_name && !formik.errors.auth_name ? "success-box" : ""}`} type={"text"} onChange={formik.handleChange} value={formik.values.auth_name}></input>
              {formik.errors.auth_name ? <span style={{ color: "red" }}>{formik.errors.auth_name}</span> : null}
            </div>
            <div className='col-lg-4'>
              <label>Publisher</label>
              <input name="pub_name" onBlur={formik.handleBlur} className={`form-control ${formik.touched.pub_name && formik.errors.pub_name ? "error-box" : ""} ${formik.touched.pub_name && !formik.errors.pub_name ? "success-box" : ""}`} type={"text"} onChange={formik.handleChange} value={formik.values.pub_name}></input>
              {formik.errors.pub_name ? <span style={{ color: "red" }}>{formik.errors.pub_name}</span> : null}
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <label>Publication date</label>
              <input name="pub_date" onBlur={formik.handleBlur} className={`form-control ${formik.touched.pub_date && formik.errors.pub_date ? "error-box" : ""} ${formik.touched.pub_date && !formik.errors.pub_date ? "success-box" : ""}`} type={"date"} onChange={formik.handleChange} value={formik.values.pub_date}></input>
              {formik.errors.pub_date ? <span style={{ color: "red" }}>{formik.errors.pub_date}</span> : null}
            </div>
            <div className='col-lg-4'>
              <label>Total Copies</label>
              <input name="total_copies" onBlur={formik.handleBlur} className={`form-control ${formik.touched.total_copies && formik.errors.total_copies ? "error-box" : ""} ${formik.touched.total_copies && !formik.errors.total_copies ? "success-box" : ""}`} type={"number"} onChange={formik.handleChange} value={formik.values.total_copies}></input>
              {formik.errors.total_copies ? <span style={{ color: "red" }}>{formik.errors.total_copies}</span> : null}
            </div>
            <div className='col-lg-4'>
              <label>Available Copies</label>
              <input name="aval_copies" onBlur={formik.handleBlur} className={`form-control ${formik.touched.aval_copies && formik.errors.aval_copies ? "error-box" : ""} ${formik.touched.aval_copies && !formik.errors.aval_copies ? "success-box" : ""}`} type={"number"} onChange={formik.handleChange} value={formik.values.aval_copies}></input>
              {formik.errors.aval_copies ? <span style={{ color: "red" }}>{formik.errors.aval_copies}</span> : null}
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <label>Category/Genre</label>
              <select name="genre" onBlur={formik.handleBlur} className={`form-control ${formik.touched.genre && formik.errors.genre ? "error-box" : ""} ${formik.touched.genre && !formik.errors.genre ? "success-box" : ""}`} onChange={formik.handleChange} value={formik.values.genre}>
                <option disabled selected value={""}>--select--</option>
                <option value={"Fiction"}>Fiction</option>
                <option value={"NonFiction"}>NonFiction</option>
                <option value={"Others"}>Others</option>
              </select>
              {formik.errors.genre ? <span style={{ color: "red" }}>{formik.errors.genre}</span> : null}
            </div>
            <div className='col-lg-4'>
              <label>Condition</label>
              <select name="condition" onBlur={formik.handleBlur} className={`form-control ${formik.touched.condition && formik.errors.condition ? "error-box" : ""} ${formik.touched.condition && !formik.errors.condition ? "success-box" : ""}`} onChange={formik.handleChange} value={formik.values.condition}>
                <option disabled selected value={""}>--select--</option>
                <option value={"New"}>New</option>
                <option value={"Good"}>Good</option>
                <option value={"Poor"}>Poor</option>
              </select>
              {formik.errors.condition ? <span style={{ color: "red" }}>{formik.errors.condition}</span> : null}
            </div>
            <div className='col-lg-4'>
              <label>Status</label>
              <select name="status" onBlur={formik.handleBlur} className={`form-control ${formik.touched.status && formik.errors.status ? "error-box" : ""} ${formik.touched.status && !formik.errors.status ? "success-box" : ""}`} onChange={formik.handleChange} value={formik.values.status}>
                <option disabled selected value={""}>--select--</option>
                <option value={"Available"}>Available</option>
                <option value={"Borrowed"}>Borrowed</option>
                <option value={"On hold"}>On hold</option>
              </select>
              {formik.errors.status ? <span style={{ color: "red" }}>{formik.errors.status}</span> : null}
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <label>ISBN</label>
              <input name="isbn" onBlur={formik.handleBlur} className={`form-control ${formik.touched.isbn && formik.errors.isbn ? "error-box" : ""} ${formik.touched.isbn && !formik.errors.isbn ? "success-box" : ""}`} type={"text"} onChange={formik.handleChange} value={formik.values.isbn}></input>
              {formik.errors.isbn ? <span style={{ color: "red" }}>{formik.errors.isbn}</span> : null}
            </div>
            <div className='col-lg-4'>
              <label>Description</label>
              <textarea name="description" onBlur={formik.handleBlur} className={`form-control ${formik.touched.description && formik.errors.description ? "error-box" : ""} ${formik.touched.description && !formik.errors.description ? "success-box" : ""}`} cols="50" rows="3" onChange={formik.handleChange} value={formik.values.description}></textarea>
              {formik.errors.description ? <span style={{ color: "red" }}>{formik.errors.description}</span> : null}
            </div>
            <div className='col-lg-6'>
              <input type={"submit"} value="Update" className="btn btn-primary"></input>
            </div>
          </div>
        </form >
      </div >
    </>
  )
}

export default Editbook