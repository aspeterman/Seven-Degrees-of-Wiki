// const mongoose = require("mongoose");

// // Replace this with your MONGOURI.
// const MONGOURI = "mongodb://localhost:27017";

// const InitiateMongoServer = async () => {
//   try {
//     await mongoose.connect(MONGOURI, {
//       useNewUrlParser: true
//     });
//     console.log("Connected to DB !!");
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// };

// module.exports = InitiateMongoServer;
const config = require('./config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('./models/Users')
};