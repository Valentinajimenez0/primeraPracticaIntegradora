import { Router } from "express"
import cartModel from "../models/cart.model.js"

const router = Router()

router.get('/cart', async (req, res) => {
    try {
        let carts = await cartModel.find()
        res.send({ result: "success", payload: carts })
    } catch (error) {
        console.log(error)
    }
})

export default router