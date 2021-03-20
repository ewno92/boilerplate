const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String }, // String is shorthand for {type: String}
  email: { type: String, default: "" },
  password: String,
  lastname: String,
  role: String,
  token: String,
  tokenExp: Number,
});

// const User = mongoose.model("user", userSchema);

module.exports = mongoose.model("user", userSchema);
// module.exports = { User };
// export default mongoose.model("user", userSchema);
