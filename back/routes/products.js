const express = require('express');
const router = express.Router();
const { Categories, Product, Reviews, User } = require('../models/');

router.get('/', function (req, res, next) {
    Product.findAll({ include: [ Categories, Reviews] })
        .then((products) => res.status(200).send(products))
})
router.post('/',function(req,res,next){
    Product.create(req.body)
        .then((product) => res.status(201).send(product))
})
router.get('/:id',function(req,res,next){
    Product.findById(req.params.id,{
        include: [{
            model: Categories,
            attributes:['id','name'],
            through: {
                attributes:[],
            }
        },{
            model: Reviews,
            attributes:['id','AuthorId','rate','text'],
            through: {
                attributes:[],
            },include:[{
                model:User,
                as:'Author'
            }]
        }]
    })
        .then((product) => res.status(200).send(product))
        .catch((err) => res.send(err))
})
module.exports=router;