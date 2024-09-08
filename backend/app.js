const express = require("express")
const app = express();
require("dotenv").config();





//creating port

app.listen(process.env.PORT,() => {
    console.log(`server started at port ${process.env.PORT}`)
});