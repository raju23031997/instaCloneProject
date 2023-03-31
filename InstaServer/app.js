const express = require("express")
const cors= require("cors")
const app = express()
require("./DataBase/instaConn")
const port = process.env.PORT || 5050
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
  
// app.use(express.static(__dirname + "/public"));
// app.use("/uploads", express.static("uploads"));
app.use(require('./router/instaAuth'))


app.listen(port , ()=>{
    console.log(`The Server running on port No ${port}.....`)
})