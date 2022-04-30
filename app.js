import { publicDecrypt } from "crypto"
import express, { json } from "express"
import { Product } from './api/Product.js'
import { listenerCount } from "process"
const app = express()
const PORT = process.env.PORT || 8000

let products = [{
    id : 1,
    name : 'Book',
    quantity : 10,
    price : 25
},{
    id : 2,
    name : 'Marker',
    quantity : 99,
    price : 5
}]   

//Middleware
app.use(json())

const product =

app.get('/api/product/readAll', product.readAll)
    res.send(products)


app.get('/api/product/find/:id', (req, res) => {
    res.send(products.find(product => product.id === parseInt(req.params.id)))
})

app.post('/api/product/add', (req, res) => {
    products.push({
        id : products.length + 1,
        name : req.body.name,
        quantity : req.body.quantity,
        price : req.body.price
    })
    res.send(products)
})

app.put('/api.product/update', (req, res) => {
    const product = products.find(product => product.id === req.body.id)
    product.name = req.body.name
    product.quantity = req.body.quantity
    product.price = req.body.price
    res.send(products)

})

app.delete('/api/product/delete/:id', (req, res) => {
    products = products.filter(product => product.id !== parseInt (req.params.id))
    res.send(products)
})


app.listen(PORT, err => console.log(err ? err : PORT));


// CRUD operations
// C - Create
// R - Read
// U - Update
// D - Delete

