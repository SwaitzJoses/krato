const express = require("express")
const app = express();
const mongoose = require ("mongoose");
const dataRouter = require('./Routes/data.js')



app.use(express.json())

app.get('/',(req,res)=>res.send("api running"))

const connectDB = async () => {
    try{
        console.log('mongodb connected')
        await mongoose.connect('mongodb+srv://swaitz:12345@cluster0.i4mkj.mongodb.net/krato?retryWrites=true&w=majority')
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

connectDB()

app.use('/api/data', dataRouter)

const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`${port}`))