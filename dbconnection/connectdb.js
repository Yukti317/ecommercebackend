require("dotenv").config();
const connectDB = require("./config");

module.exports = async (req, res) => {
    try {
        await connectDB();
        res.status(200).json({ message: "MongoDB connection successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
