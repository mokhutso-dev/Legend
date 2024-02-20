import { default as mongoose } from "mongoose";

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Task database connected successful");
    } catch (error) {
        console.log("Database Error");
    }
}

export default dbConnect;