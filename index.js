require('dotenv').config();
const express = require('express');
const exampleRoute = require('./routes/ExampelRoute');

const app = express();

// Routes
app.use('/example', exampleRoute);

//Start express
const port = process.env.PORT; 

app.listen(port, () => 
{
    console.log("Express started, listening to port " + port);
});


