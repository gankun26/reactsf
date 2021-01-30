const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const conn = mysql.createConnection({    
     host: 'localhost',
     user: 'root',
     password: '',
     database:'asfeletro'
    })

     app.use(cors())

    app.listen(4000, ()=>{
        console.log("servidor rodando")
    })

    app.get("/", (req, res, next)=>{
           conn.query(`SELECT * FROM produto`, (error, result)=> {
               res.json(result)
           } )
    })