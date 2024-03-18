require('dotenv').config();

import express from 'express';
import exampleRoute from './routes/ExampelRoute';

const app = express();

// Routes
app.use('/example', exampleRoute);

//Start express
const port = process.env.PORT; 

app.listen(port, () => 
{
    console.log("Express started, listening to port " + port);
});


