const express = require("express");
const router = express.Router();
const  ServicesRepository   = require("../Repository/Services.js")
const { db } = require('../db.js');

const services = new ServicesRepository(db);
router.get("/",(req,res)=> {
    services.getAll().then((results)=> {
        res.send(results);  
    });
});

router.get("/:id",(req,res) => {
    services.getById(req.params,id).then((result)=>{
        res.send(result);
    })
});

router.post("/create",(req,res)=>{
    services.create(req.body).then(()=>{
        res.send('ok');
    }).catch((err)=> {
        res.send(err);
    })
});

router.put("/update/:id",(req,res)=>{
    services.update(req.body,req.params.id).then(()=>{
        res.send('User successfully update');
    })
});

router.delete("/delete/:id",(req,res)=>{
    services.delete(req.params.id).then(()=>{
        res.send('User successfully delete');
    })
});


module.exports = router