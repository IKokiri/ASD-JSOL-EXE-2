import express from 'express';
import products from './data/products.js';

const app = express();
app.use(express.json());


app.post('/produtos/', (req, res) => {
    console.log(req.body)
    res.send(products).json()
})

app.get('/produtos/', (req, res) => {
    res.status(201).send(products)
})

app.get('/produtos/:id', (req, res) => {
    res.send('Hello World!')
})

app.put('/produtos/:id', (req, res) => {
    res.send('Hello World!')
})

app.delete('/produtos/:id', (req, res) => {
    res.send('Hello World!')
})
export default app