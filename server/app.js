const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");



const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin:"http://127.0.0.1:3000",
    // credentials:true
}))


require("./connection/conection");

// FUCTIONs

const signup = require("./db_functions/signup");

const mailer = require("./dlt");




app.post("/signup",signup);

app.post("/dlt",mailer);







app.listen(7000,()=>{
    console.log("Listening on 8000");
})