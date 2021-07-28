const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({ // 
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testsql'
});

app.use(cors())
app.use(express.json()) // lets us parse info from client in req.body
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req,res) => {
    const sqlSelect = "SELECT * FROM movie_reviews;"

    db.query(sqlSelect, (error, response) =>{
        console.log(response);
        res.send(response)
    })
});
app.post('/api/insert', (req,res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews(movieName,movieReview,createdAt,updatedAt) VALUES(?,?,NOW(),NOW());"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result)
        console.log(err)
    })
})

// how to prevent sql injections
// validations which help prevent sql injections
// modularizing
// using req.body



app.listen(3001, () => {
    console.log("app is running on port 3001")
});