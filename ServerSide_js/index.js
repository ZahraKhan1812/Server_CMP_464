//to print use console.log
//console.log('hello')

const express = require('express')
const app = express()
const port = 3001
const path = require('path')

//app.use('/static', express.static(path.join(__dirname, 'public')))


app.use(express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'index.html'))
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  app.post('/', (req, res) => {
    res.send('Recieved a post')
  })
