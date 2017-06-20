const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
moment = require('moment');
router = express.Router();
const app = express();

app.use(morgan('combined'));
require(path.join(__dirname, 'routes'));
app.use(router);
app.listen(process.env.SERVER_PORT || 3000)