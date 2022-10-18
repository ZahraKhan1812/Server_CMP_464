
const express = require('express')
const app = express()
const port = 3001
const path = require('path')

//app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var bodyParser = require('body-parser');

app.use(bodyParser.text());
app.use(express.text());


app.post('/comment', (req, res) => {
    console.log(req.body)  
    res.json(req.body)
})

// app.post('/comment', (req, res) => {
//     console.log(req.body)  
//     if(req.body.firstName=="Zahra"){
//         console.log("welcome to app")  
//     }
//     addToDatabase(req.body.comment)
//     res.json(req.body)
// })

app.post('/', (req, res) => {
    res.send('Recieved a post request')
})
    
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, './public',  'index.html'))
})

app.get('/Zahra', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'Zahra.html'))
})

app.get('/Iverson', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'Iverson.html'))
})

app.get('/Benjamin', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'Benjamin.html'))
})

app.get('/Joe', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'Joe.html'))
})

app.get('/Fajer', (req, res) => {
    res.sendFile(path.join(__dirname, './public',  'Fajer.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

