
const express = require("express") ; 
const app = express() ; 


require("dotenv").config() ;
const PORT = process.env.PORT || 8000 ; 

app.use(express.json()) ; 


const profileRoutes = require("./routes/Profile") ; 
app.use("/api/profile" , profileRoutes) ; 


const DBconnect = require("./config/database.js") ; 
DBconnect()  ; 


app.listen( PORT , () => {
    console.log(`Server has started succesfully at ${PORT}`) ; 
} )




