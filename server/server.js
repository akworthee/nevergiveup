const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const Routes = require("./Router/index");
const mongoose = require("mongoose");
const PORT = process.env.PORT;

const app = express();


app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:false}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:false}));
app.use("/api",Routes)

const CONNECTION_URL = "mongodb+srv://jsbackend:jsbackend123@cluster0.ng6f1.mongodb.net/Testing?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
})
.catch((e)=>{
    console.log(e);
})

mongoose.set("useFindAndModify", false);

