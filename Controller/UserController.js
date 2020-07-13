const express = require("express");
const router = express.Router();
const  UserRepository  = require("../Repository/User.js")
const { db } = require('../db.js');

const user = new UserRepository(db);
router.get("/",(req,res)=> {
    user.getAll().then((results)=> {
        res.send(results);
    })
});

router.get("/:id",(req,res) => {
    user.getById(req.params,id).then((result)=>{
        res.send(result);
    })
});

router.post("/create",(req,res)=>{
    user.create(req.body).then(()=>{
        res.send('ok');
    }).catch((err)=> {
        res.send(err);
    })
});

router.put("/update/:id",(req,res)=>{
    user.update(req.body,req.params.id).then(()=>{
        res.send('User successfully update');
    })
});

router.delete("/delete/:id",(req,res)=>{
    user.delete(req.params.id).then(()=>{
        res.send('User successfully delete');
    })
});


module.exports = router