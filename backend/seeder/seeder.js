import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb+srv://laibaaltaf157:laibaaltaf157@shopit.yib0dks.mongodb.net/shopit-v2?retryWrites=true&w=majority&appName=shopit");

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

seedProducts();
