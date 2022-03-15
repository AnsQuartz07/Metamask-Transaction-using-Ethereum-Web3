const express = require('express');
const app = express();
const Web3 = require('web3');
const dotenv = require('dotenv')
// Import Route
const transRoute = require('./routes/account')

dotenv.config();
app.use(express.json());
app.use('/api/infura',transRoute)

app.listen(3000, function() {
    console.log('Server Up and Running...')
})
