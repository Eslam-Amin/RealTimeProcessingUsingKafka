const mongoose = require("mongoose");
const { MONGO_URI, MONGO_URI_LOCAL } = require("../env");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("🚀 ~ connectDB ~ MONGO_URI:", MONGO_URI_LOCAL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error", err);
    process.exit(1);
  }
};

module.exports = connectDB;
