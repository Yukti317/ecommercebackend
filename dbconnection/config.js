//Conection with db
require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.warn("Connected Scussfully")
}).catch((err)=>{
    console.warn('errr',err)
    
// mongoose.connect('mongodb://localhost:27017/E_commerce').then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)

// mongoose.connect('mongodb+srv://mehtayukti317:nAal03pQyXEW4UpW@cluster0.g1myk48.mongodb.net/').then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)
})
