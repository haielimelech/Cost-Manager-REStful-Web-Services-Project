require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open',() => console.log('Connected to Database'));


//Routes:
const addCostRouter = require('./routes/addcost');
app.use('/addcost',addCostRouter);

const reportRouter = require('./routes/report');
app.use('/report',reportRouter);

const aboutRouter = require('./routes/about');
app.use('/about',aboutRouter);


app.listen(3000, () => {console.log('Web service listening on port 3000');
});
