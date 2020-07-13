const express = require("express");
const router = express.Router();
const  ShedulesRepository   = require("../Repository/Schedule.js")
const { db } = require('../db.js');

const schedule = new ShedulesRepository(db);
router.get("/",(req,res)=> {
    schedule.getAll().then((results)=> {
        res.send(results);  
    });
});

router.get("/:id",(req,res) => {
    schedule.getById(req.params,id).then((result)=>{
        res.send(result);
    })
});

router.post("/create",(req,res)=>{
    schedule.create(req.body).then(()=>{
        res.send('ok');
    }).catch((err)=> {
        res.send(err);
    })
});

router.put("/update/:id",(req,res)=>{
    schedule.update(req.body,req.params.id).then(()=>{
        res.send('User successfully update');
    })
});

router.delete("/delete/:id",(req,res)=>{
    schedule.delete(req.params.id).then(()=>{
        res.send('User successfully delete');
    })
});


module.exports = router