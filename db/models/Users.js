// const mongoose = require("mongoose");

// const UserSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   }
// });

// module.exports = mongoose.model("user", UserSchema);

const mongoose = require("mongoose");
const schema = mongoose.Schema({
  avatars: String,
  username: String,
  email: String,
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  password: String,
  status: { type: String, default: "not_activated" },
  activated_token: { type: String, default: "" },
  resetPasswordToken: { type: String, default: "" },
  level: { type: String, default: "staff" },
  created: { type: Date, default: Date.now }
});

schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("users", schema);