require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongo_db");
const startConsumer = require("./config/kafka/consumer");
const userActivityLogsRoutes = require("./routes/userActivityLogs.routes");
const fakeUserRoutes = require("./routes/fakeUser.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use("/api/user-activity-logs", userActivityLogsRoutes);
app.use("/api/fake", fakeUserRoutes);
// Not Found Route
app.all("*", (req, res, next) => {
  res.status(404).json({
    message: `This Route (${req.originalUrl}) is not found`,
    success: false
  });
});

// Start Kafka Consumer
startConsumer()
  .then(() => console.log("Kafka Consumer Started"))
  .catch((err) => {
    console.log("🚀 ~ Error starting Kafka Consumer:", err);
  });
// Start Server & DB Connection
connectDB().then(() => {
  app.listen(3000, () => console.log(`Server running on port ${3000}`));
});
