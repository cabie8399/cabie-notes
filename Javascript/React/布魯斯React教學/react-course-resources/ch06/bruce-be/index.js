const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// Automatically allow cross-origin requests
app.use(cors());

app.get('/', function(req, res) {
  console.log('hit');
  // http code
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'))
  // res.send('hello!')
})

app.get('/about/:id', function(req, res) {
  console.log('hit');
  // http code
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'))
  // res.send('hello!')
})

app.listen(4000, () => {
  console.log('on 4000')
})