import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongoDB");
    } catch (err) {
        console.log("Error while connecting MongoDB", err.message);
    }
}

export default connectToMongoDB;
