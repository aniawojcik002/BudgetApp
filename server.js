const express = require('express');

const app = express();
const port= 8080;

//App routing
app.get('/', (req, res) => {
});


//which port app need to listen
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})

