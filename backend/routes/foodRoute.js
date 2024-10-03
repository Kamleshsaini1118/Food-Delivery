import express from "express";
import { addFood, listfood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ensure this folder exists in your project root
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // No space, use underscore
    }
});

const upload = multer({ storage: storage });

// Create POST request to add food
foodRouter.post("/add", upload.single("image"), addFood);
// create GET request 
foodRouter.get("/list", listfood)
// create delete request
foodRouter.post("/remove", removeFood)

export default foodRouter;
