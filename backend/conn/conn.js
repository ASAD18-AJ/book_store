const mongoose = require("mongoose")

const conn = async() =>{
    try{
        await mongoose.connect(`${}`)
        console.log("connected to database");
        
    }
}