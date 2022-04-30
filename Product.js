export class Product {
    products = []
    
    add = (req, res) => {
        this.products.push({
            id : this.products.length + 1,
            name : req.body.name,
            quantity : req.body.quantity,
            price : req.body.price
        })
        res.send(this.products)
    }

    remove = (req, res) => {
        this.products = this.products.filter(product => product.id !== parseInt (req.params.id))
    res.send(this.products)
    }

    update = (req, res) => {
        const product = this.products.find(product => product.id === req.body.id)
        product.name = req.body.name
        product.quantity = req.body.quantity
        product.price = req.body.price
        res.send(this.products)
    }

    readAll = (req, res) => {
        res.send(this.products)
    }

    find = (req, res) => {
        res.send(this.products.find(product => product.id === parseInt (req.params.id)))
    }

}