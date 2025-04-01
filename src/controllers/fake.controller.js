const sendLog = require("../config/kafka/producer");
// this will either true or false randomly
function generateSuccessValue() {
  return Math.random() < 0.5;
}
function getRandomUserId() {
  const idsArr = [
    "67a75d145f7fd26ae97as1bf",
    "67a75d145f7fd26ae972dcsf",
    "67a75d145rszwd26ae972d1bf",
    "67a75d145f7fd26ae97zsad1bf"
  ];
  const randomIndex = Math.floor(Math.random() * idsArr.length); // Generate a random index
  return idsArr[randomIndex]; // Return the value at the random index
}

class FakeController {
  login(req, res, next) {
    let successValue = generateSuccessValue();
    const message = successValue ? "Login Success" : "Login Failed";
    const statusCode = successValue ? 200 : 400;
    sendLog({
      action: "login",
      method: "POST",
      userId: getRandomUserId(),
      success: successValue,
      message,
      statusCode
    });
    res.status(statusCode).json({
      message
    });
  }
  getUserOrders(req, res, next) {
    let successValue = generateSuccessValue();
    const message = successValue
      ? "here are your Orders"
      : "Failed to fetch orders";
    const statusCode = successValue ? 201 : 400;

    sendLog({
      action: "orders",
      method: "GET",
      userId: getRandomUserId(),
      success: successValue,
      message,
      statusCode
    });
    res.status(statusCode).json({
      message
    });
  }

  createNewOrder(req, res, next) {
    let successValue = generateSuccessValue();
    const message = successValue ? "order created" : "Failed to create order";
    const statusCode = successValue ? 201 : 400;
    sendLog({
      action: "orders",
      method: "POST",
      userId: getRandomUserId(),
      success: successValue,
      statusCode,
      message
    });
    res.status(statusCode).json({ message });
  }

  getUserCart(req, res, next) {
    let successValue = generateSuccessValue();
    const statusCode = successValue ? 200 : 400;
    const message = successValue
      ? "here are your cart items"
      : "Failed to fetch cart";

    sendLog({
      action: "cartItems",
      method: "GET",
      userId: getRandomUserId(),
      success: successValue,
      message,
      statusCode
    });
    res.status(statusCode).json({
      message
    });
  }

  addItemToCart(req, res, next) {
    let successValue = generateSuccessValue();
    const statusCode = successValue ? 201 : 400;
    const message = successValue
      ? "Item is added to cart Successfully"
      : "Failed to add item to cart";
    sendLog({
      action: "cartItems",
      method: "POST",
      userId: getRandomUserId(),
      success: successValue,
      message,
      statusCode
    });
    res.status(statusCode).json({
      message
    });
  }
}

module.exports = new FakeController();
