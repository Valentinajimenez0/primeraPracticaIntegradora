import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/users.router.js'
import productRouter from './routes/products.router.js';
import messagesRouter from './routes/messages.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import cartRouter from './routes/carts.router.js';


const app = express();
const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

 mongoose.connect("mongodb+srv://valentinaJimenez0:sherina20181@clustervj.7lk17ev.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ClusterVJ")
 .then (()=> {console.log("conectado")})
 .catch (() => {console.error("errorr")})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/messages', messagesRouter)
app.use('/api/carts', cartRouter)


app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')



app.listen(PORT, () => {
    console.log(`listening on port PORT`);
});