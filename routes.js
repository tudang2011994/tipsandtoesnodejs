const express = require("express");
const router = express.Router();
const accountController = require("./controller/account")

router.get("/account",accountController.getAllAccount);
router.get("/account/:id",accountController.getAccountById);
router.post("/account",accountController.createAccount);
router.put("/account/:id",accountController.editAccount);
router.delete("/account/:id",accountController.deleteAccount);


module.exports = router