const express = require('express');
const cors = require('cors');
const app = express();


const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
const usersRoute = require('./routes/user')
app.use('/users', usersRoute)

app.get('/',(req,res) => {
    res.send('we are on home')
})

mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('rrrrrrrrrrrr'))

app.listen(3000)