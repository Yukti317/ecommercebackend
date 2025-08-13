// //Conection with db

// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://mehtayukti317:VAC3ltTS08qloq5n@cluster0.0xtyhi8.mongodb.net/E_commerce?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)

// // mongoose.connect('mongodb://localhost:27017/E_commerce').then(()=>{
// //     console.warn("Connected Scussfully")
// // }).catch((err)=>{
// //     console.warn('errr',err)

// // mongoose.connect('mongodb+srv://mehtayukti317:nAal03pQyXEW4UpW@cluster0.g1myk48.mongodb.net/').then(()=>{
// //     console.warn("Connected Scussfully")
// // }).catch((err)=>{
// //     console.warn('errr',err)
// })

const mongoose = require("mongoose");

let isConnected = false; // Track the connection status

const connectDB = async () => {
    if (isConnected) {
        console.log("🔄 Using existing MongoDB connection");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState;
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        throw err;
    }
};

module.exports = connectDB;
