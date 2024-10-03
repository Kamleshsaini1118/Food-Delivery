import { foodModel } from "../models/foodmodel.js";
import fs from 'fs'

const addFood = async (req, res) => {
    try {
        console.log(req.file); // Check if file is uploaded
        console.log(req.body); // Check form data

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        let image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({
            success: true,
            message: "Food Added"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred"
        });
    }
};

// all food list
const listfood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            data: foods
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })        
    }
}

// remove food item 

const removeFood = async(req, res) => {
    try {
        // Extract the food id from the request parameters(id nikale)
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {})

        // find the food item by ID remove it firm the database
        const deleteFood = await foodModel.findByIdAndDelete(req.body.id);

        if(!deleteFood){
            return res.status(404)
                    .json({
                        success: false,
                        message: " Food not found."
                    })
        }

        // semd success response
        res.status(200)
            .json({
                success: true,
                message: "Food removed successfully",
                data: deleteFood
            })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}

export { addFood, listfood, removeFood };
