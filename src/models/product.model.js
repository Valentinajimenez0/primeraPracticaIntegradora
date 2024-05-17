
import mongoose from "mongoose";

const productCollection = "productos"

const productSchema = new mongoose.Schema({
    titulo: {type: String, required: true, max: 100},
    precio: {type: Number, required: true, max: 100},
    disponible: {type: Boolean, required: true, max: 100}
});

const productModel = mongoose.model(productCollection, productSchema)

export default productModel