//importing express to create express server
import express from 'express';

//Importing cors for restrict domains/port
import cors from 'cors';

//Importing hallRouter to access other api endpoints
import hallRouter from './Routers/Hall_router.js'

//creating express server
const app = express();

//creating port
const PORT = 3333;

//using cors
app.use(cors());

//using json() method to parse the body data
app.use(express.json());

app.use('/', hallRouter);


//Listening the express server
app.listen(PORT, ()=>{
    console.log(`Express Server Connected with the Port : ${PORT}`);
});