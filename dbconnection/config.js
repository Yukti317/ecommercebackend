//Conection with db

const mongoose = require('mongoose');
require("dotenv").config();
// mongoose.connect('mongodb://localhost:27017/E_commerce').then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)

    mongoose.connect('process.env.MONGO_URI' + '?retryWrites=true&w=majority').then(()=>{
    console.warn("Connected Scussfully")
}).catch((err)=>{
    console.warn('errr',err)

// mongoose.connect('mongodb+srv://mehtayukti317:nAal03pQyXEW4UpW@cluster0.g1myk48.mongodb.net/').then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)
})
