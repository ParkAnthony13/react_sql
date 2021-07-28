import React,{ useEffect, useState } from 'react'
import { Router, navigate, Link } from '@reach/router'
import axios from 'axios'


const FormComponent = props => {
    const [movieName, setMovieName] = useState("")
    const [review, setReview] = useState("")
    const [movieReviewList, setMovieList] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(movieName)
        console.log(review)
        axios.post('http://localhost:3001/api/insert', {
            movieName: movieName,
            movieReview: review
        })
            .then(() => {
                alert("successful insert")
            })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/get')
            .then((response) => {
                console.log(response.data)
                setMovieList(response.data)
            })
    },[])


    return(
        <div>
            <h1>CRUD APPLICATION</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Movie Name:</label>
                    <input onChange={(e) => {setMovieName(e.target.value)}} type="text" name="movieName"/>
                    <label>Review:</label>
                    <input onChange={(e) => {setReview(e.target.value)}} type="text" name="review"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {movieReviewList.map((row,idx) => {
                    return(
                        <div>
                            <h1>{row.movieName}</h1>
                            <p>{row.movieReview}</p>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default FormComponent