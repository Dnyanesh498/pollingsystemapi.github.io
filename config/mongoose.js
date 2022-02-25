const mongoose = require("mongoose");
// mongoDB atlas uri
const URI =
  "mongodb+srv://dnyaneshpatil:EnCqkzZIYtZw2NQW@cluster0.y3vwc.mongodb.net/polling-database?retryWrites=true&w=majority";

// connecting to mongoDB atlas
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};
module.exports = connectDB;
