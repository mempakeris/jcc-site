const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const debug = require('debug')('server');

const app = express();
const port = process.env.API_PORT;

// initialize dotenv
require('dotenv').config();

// initialize Mongoose User model
require('./models/user')();

// Connect mongodb (NOT IN USE AT THE MOMENT)
// const mongodPath = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// mongoose.connect(mongodPath, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(helmet());

// routes
let routes = require('./routes/routes.js');
app.use('/api', routes);

// passport
require('./services/passport')(app);

// launch server
app.listen(port, () => debug(`server listening on ${port}`));
