const express = require('express');
const pool = require('./database');
const cors = require('cors');  //cors is nodeJS package

// express App
const app = express();
//Port
const port= 5000;

// Middleware
app.use(cors());
app.use(express.json());



// App routing
app.get('/', pool.getAllRows);


//listen for requests
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})


