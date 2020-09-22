const express = require("express")
const bodyParser = require("body-parser")
const expressSanitizer = require("express-sanitizer")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const seedDB = require('./seed')

const port = 3031
const blogRoute = require('./routes/blogs')
//seedDB()

// Database setup!!!
mongoose.connect("mongodb://localhost:27017/restful_blog_app_1",{
useNewUrlParser: true,
useCreateIndex: true,	
useUnifiedTopology: true,
useFindAndModify: false
}).then(()=>{
	console.log("Connected to DB!")
}).catch(err =>{
	console.log("Error:", err.message)
})


// configurate your ejs template
app.set("view engine", "ejs")
// use express to access to css file on the directory
app.use(express.static("public"))
//use to encode your json data
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSanitizer())
//overinding our put mehtod 
app.use(methodOverride("_method"))


app.use('/blogs', blogRoute)

app.listen(port, ()=>{
    console.log(`Your server is running on port number: ${port} `)
})