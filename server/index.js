const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key_here"; // Use environment variable in production
const SignUpModal = require("../server/modals/Employee")
const getAllRegistrationModal = require("../server/modals/Registration");



const app = express()
app.use(express.json())
app.use(cors())


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));


// Signup new user
app.post('/register', (req, res) => {
    SignUpModal.create(req.body)
        .then(signup => res.json(signup))
        .catch(err => res.json(err))
})


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    SignUpModal.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // ✅ Generate JWT token
                    const token = jwt.sign(
                        { id: user._id, email: user.email },
                        JWT_SECRET,
                        { expiresIn: "1h" } // Token valid for 1 hour
                    );

                    // ✅ Send token + user info in response
                    res.json({
                        message: "Login successful",
                        token,
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        }
                    });
                } else {
                    res.status(401).json({ message: "The password is incorrect" });
                }
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

// Registration form
app.post('/createregistration', (req, res) => {
    getAllRegistrationModal.create(req.body)
        .then(registra => res.json(registra))
        .catch(err => res.json(err))
})


// Get All Registration
app.get('/getallregistration', (req, res) => {
    getAllRegistrationModal.find()
        .then((registrations) => res.json(registrations))
        .catch((err) => res.status(400).json({ error: err.message }))
})

// UPDATE
app.put("/updateregistration/:id", (req, res) => {
  getAllRegistrationModal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updated) => res.json(updated))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// DELETE
app.delete("/deleteregistration/:id", (req, res) => {
  const { id } = req.params;

  getAllRegistrationModal
    .findByIdAndDelete(id)
    .then(() => res.json({ message: "✅ Registration deleted successfully" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.listen(3001, () => {
    console.log("server is running")
})