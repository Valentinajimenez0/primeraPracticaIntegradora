
import { Router } from "express";
import messageModel from "../models/message.model.js"

const router = Router()

router.get('/mensajes', async (req, res) => {
    try {
        const mensajes = await messageModel.find()
        res.render('chat', { mensajes })    }
    catch (error) {
        console.error(error)
    }
});

router.post('/', async (req, res) => {
    // let {nombre, apellido, email} = req.body
    // if (!nombre || !apellido || !email) {
    //     res.send({status: "error", error: "faltan parametros"})
    // }
    // let result = await userModel.create({nombre, apellido,email})
    // res.send({result: "success", payload : result})
});

router.put('/:uid', async (req, res) => {
    //     let {uid} = req.params
    //      let userToReplace = req.body

    //     if (!userToReplace.nombre || !userToReplace.apellido || !userToReplace.email) {
    //         res.send({result: "error", error: "faltan parametros"})
    //     }
    //    let resultado = await userModel.updateOne({_id: uid}, userToReplace)

    //    res.send({result: "success", playload: resultado})
});

router.delete('/:uid', async (req, res) => {
    // let {uid} = req.params
    // let result = await userModel.deleteOne({_id: uid})
    // res.send({result: "success", playload: result})
});


export default router;