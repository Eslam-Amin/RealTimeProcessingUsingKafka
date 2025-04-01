const mongoose = require("mongoose");

const userActivityLogSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    action: { type: String, required: true },
    method: { type: String, required: true },
    action: { type: String, required: true },
    method: { type: String, required: true },
    userId: { type: String, required: true },
    success: { type: Boolean, required: true },
    message: { type: String },
    statusCode: { type: Number, required: true }
  },
  { timestamps: true }
);

userActivityLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model("UserActivityLog", userActivityLogSchema);
