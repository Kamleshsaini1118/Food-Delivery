import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export const foodModel = mongoose.model("foodModel", foodSchema)