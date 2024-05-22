import { Router } from 'express';
import productModel from '../models/product.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const products = await productModel.find().lean();
        res.render('products', { products });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).render('error', { message: 'Error al cargar los productos' });
    }
});

router.post('/', async (req, res) => {
    const { title, description, price, thumbnail, code, stock, status } = req.body;

    try {
        const convertedStatus = status === 'on';

        const newProduct = new productModel({ title, description, price, thumbnail, code, stock, status: convertedStatus });
        await newProduct.save();
        res.redirect('/api/products');
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).send('Error al crear el producto: ' + error.message);
    }
});

router.put('/:pid', async (req, res) => {
    const { pid } = req.params;
    const { title, description, price, thumbnail, code, stock, status } = req.body;

    try {
        const convertedStatus = status === 'on';

        await productModel.findByIdAndUpdate(pid, { title, description, price, thumbnail, code, stock, status: convertedStatus });
        res.redirect('/api/products');
    } catch (error) {
        console.error('Error al editar el producto:', error);
        res.status(500).send('Error al editar el producto: ' + error.message);
    }
});

router.delete('/:pid', async (req, res) => {
    const { pid } = req.params;

    try {
        await productModel.findByIdAndDelete(pid);
        res.redirect('/api/products');
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).send('Error al eliminar el producto: ' + error.message);
    }
});

export default router;
