import fs from 'fs';
import path from 'path';
import __dirname from '../utils.js';

const productsFilePath = path.join(__dirname, 'data', 'products.json')

async function readProductsFromFile() {
    try {
        const data = await fs.promises.readFile(productsFilePath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Error al intentar leer los productos:', error)
        throw error
    }
}

export async function home(req, res) {
    try {
        const products = await readProductsFromFile()
        res.render('home', { products })
    } catch (error) {
        console.error('Error al cargar la página de inicio:', error)
        res.status(500).render('error', { message: 'Error al cargar la página de inicio.' })
    }
}

