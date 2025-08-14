//Conection with db
require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI in .env');
}

// Global cache to reuse connection across function calls
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // fail fast if no server
    }).then((mongoose) => mongoose);
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

//-------------------------------- latest code
// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)
// -----------------------------------------------------



//--------- Local URI -----------
// mongoose.connect('mongodb://localhost:27017/E_commerce').then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)
---------------------------------------------------------------------------------
// mongoose.connect('mongodb+srv://mehtayukti317:nAal03pQyXEW4UpW@cluster0.g1myk48.mongodb.net/').then(()=>{
//     console.warn("Connected Scussfully")
// }).catch((err)=>{
//     console.warn('errr',err)
})
