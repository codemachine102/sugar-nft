const express = require('express');
const app = express();
const cors = require("cors");
const bodyparser = require('body-parser')
const connectDB = require('./config/db');
const morgan = require("morgan");
const apicache = require("apicache");

// Connect Database
connectDB();

// Init Middleware
app.use(morgan('dev'));
//configure apicache 
let cache = apicache.middleware
//caching all routes for 5 minutes
app.use(cache('5 minutes'))
// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/time', require('./routes/api/config'));
app.use('/api/asset', require('./routes/api/asset'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is up!', port);
 });
