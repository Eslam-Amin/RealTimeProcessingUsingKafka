const express = require("express");
const sendLog = require("../config/kafka/producer");
const fakeController = require("../controllers/fake.controller");
const router = express.Router();

router.post("/users/auth/login", fakeController.login);
router.post("/orders", fakeController.createNewOrder);
router.get("/orders", fakeController.getUserOrders);
router.get("/cart", fakeController.getUserCart);
router.post("/cart/:itemId", fakeController.addItemToCart);

module.exports = router;
