const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI);
        console.log("User database connected successful");
    } catch (error) {
        console.log("Database Error");
    }
}

module.exports = dbConnect;