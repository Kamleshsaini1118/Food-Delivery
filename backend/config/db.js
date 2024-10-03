import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodDelivery:9024967418@cluster1.b2ik1.mongodb.net/food').then(() => console.log("DB Connected"))
}