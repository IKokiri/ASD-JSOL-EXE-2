import express from 'express';
import products from './data/products.js';

const app = express();
app.use(express.json());

app.post('/produtos/', (req, res) => {
    const id = nextId()
    const product = {id,...req.body}
    products.produtos.push(product)
    res.status(201).send({stauts: "Inserido"})
})

app.get('/produtos/', (req, res) => {
    res.status(200).send(products)
})

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const productFound = products.produtos.filter(item => item.id == id)
    res.status(200).send(productFound)

})

app.put('/produtos/:id', (req, res) => {
    
    const id = req.params.id
    const product = req.body
    
    for(let i = 0; i < products.produtos.length; i++){
        let productSource = products.produtos[i]
        let productId = productSource.id
        if(productId == id){
            products.produtos[i] = {id,...product}
            break
        }
    }
    res.status(200).send({stauts: "Alterado"})
})

app.delete('/produtos/:id', (req, res) => {
    const id = req.params.id

    for(let i = 0; i < products.produtos.length; i++){
        let productSource = products.produtos[i]
        let productId = productSource.id
        if(productId == id){
            products.produtos.splice(i,1)
            break
        }
    }
    res.status(200).send({stauts: "Removido"})
})


const nextId = () => {
    const objectProducts = products.produtos
    const qtdeProducts = objectProducts.length
    const lastId = objectProducts[qtdeProducts-1].id
    return lastId+1
}

export default app