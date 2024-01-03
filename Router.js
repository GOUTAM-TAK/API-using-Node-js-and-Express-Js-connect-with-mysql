//all dependent dependencies
var express = require('express');
var Router = express.Router();
var connect = require('../DbUtill/mysql');

Router.get('/products', function(req, res, next) {
    connect.query('SELECT * FROM product', function(err, result, fields) {
        if (err)
        {
            console.log("err occured", err) ; 
         res.status(404).send("err in mysql");
        }
        else{ 
            res.send(result);
        }
    });
});

Router.post('/products/product', function(req,res,next){
    connect.query('INSERT INTO product values(?,?,?,?)', [req.body.id,req.body.pname,req.body.qty,req.body.price], function(err, result, fields) {
        if (err){
            console.log("err occured", err)
         res.status(404).send("err in mysql");
        }
        else {
            res.status(200).send("successfully inserted")
        };
    });
})

Router.put('/products/product/:pnum', function(req,res,next){
    connect.query('UPDATE product SET pname=?, qty=?, price=? WHERE id=?', [req.body.pname,req.body.qty,req.body.price,req.params.pnum], function(err, result, fields) {
        if (err){
            console.log("err occured", err);
         res.status(404).send("err in mysql");
        }
       else{
         res.status(200).send("successfully updated");
        }
    });
})
Router.get('/products/product/:id', function(req, res,next){
    connect.query('SELECT * FROM product WHERE id=?', [req.params.id], function(err, result, fields) {
        if (err)
        {
            console.log("err occured", err) ; 
         res.status(404).send("err in mysql");
        }
        else{ 
            res.send(result);
        }
    });
})

Router.delete('/products/product/:pnum', function(req,res,next){
    connect.query('DELETE FROM product WHERE id=?', [req.params.pnum], function(err, result, fields) {
        if (err){
            console.log("err occured", err)
         res.status(404).send("err in mysql");
        }
        else {
            res.status(200).send("successfully deleted")
        };
    });
})

module.exports = Router;