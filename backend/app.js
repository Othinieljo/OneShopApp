const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const connect = require('./_config/db')
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const favRoutes = require('./routes/favorite')

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api',productRoutes);
app.use('/api', userRoutes);
app.use('/api',favRoutes);

connect()







module.exports = app