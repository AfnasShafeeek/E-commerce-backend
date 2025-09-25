import express from 'express'
import model from '../Model/pruduct.js'

//fetching
const fetchData = async (req, res) => {
    try {
        const data = await model.find();
        console.log("Fetched data:", data);
        
        res.status(200).json({
            success: true,
            data: data,
            message: "Data fetched successfully"
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch data"
        });
    }
}

//Insertion
const putData = async (req, res) => {
    try {
        console.log("on put data");
        console.log("Req Body", req.body);
        
        const { name, description, price, image, category } = req.body;
        const requiredFields = ['name', 'price', 'category'];

        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        const c = {
            name: name,
            description: description,
            price: price,
            image: image,
            category: category
        }

        const result = await model.insertOne(c);
        console.log("Result", result);
        
        res.status(200).json({
            success: true,
            message: "Created successfully"
        });
        
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export {putData,fetchData}