const express = require("express");
const UserActivityLogsController = require("../controllers/userActivityLogs.controller");

const router = express.Router();

router.get("/", UserActivityLogsController.getUserActivityLogs);

module.exports = router;
