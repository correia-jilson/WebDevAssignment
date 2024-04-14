const mongoose = require('mongoose');

// Define your MongoDB URI directly
const mongoURI = "mongodb://localhost:27017/myadminapp";  // Adjust the URI as needed

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // Ensures that Mongoose uses the new URL string parser
      useUnifiedTopology: true // Ensures that Mongoose uses the new server discovery and monitoring engine
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;
