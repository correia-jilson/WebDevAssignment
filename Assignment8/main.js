const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const userController = require("./controllers/userController");
const app = express();

app.use(express.json());

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "images/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage });

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (!err) {
        console.log("Connected to db");
    } else {
        console.log("Error connecting to database");
    }
});

// User routes
app.post("/user/create", userController.createUser);
app.put("/user/edit/:email", userController.editUser);
app.delete("/user/delete/:email", userController.deleteUser);
app.get("/user/getAll", userController.getAllUsers);
app.post("/user/uploadImage/:email", upload.single("image"), userController.uploadUserImage);

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

module.exports = app;


