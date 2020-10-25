import mongoose from "mongoose";
import config from "config";

const db: string = config.get("mongoURI");

export const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected!")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

// module.exports = connectDB;