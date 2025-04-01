const mongoose = require("mongoose");
const { MONGO_URI } = require("../env");
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("🚀 ~ connectDB ~ MONGO_URI:", MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error", err);
    process.exit(1);
  }
};

module.exports = connectDB;
