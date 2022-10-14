//to print use console.log
//console.log('hello')

const express = require('express')
const app = express()
const port = 3001



app.get('/', (req, res) => {
    res.send('Hi')
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  app.post('/', (req, res) => {
    res.send('Recieved a post')
  })
  