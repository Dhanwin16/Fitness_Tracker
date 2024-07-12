const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Fitness-tracker:Fitness-tracker@fitness-cluster.2oxfvbk.mongodb.net/?retryWrites=true&w=majority&appName=FITNESS-CLUSTER/fitness-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
