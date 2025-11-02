const mongoose = require("mongoose")

// const RegistrationSchema = new mongoose.Schema({
//     username: String,
//     firstname: String,
//     lastname: String,
//     email: String,
//     mobile: Number,
//     address: String
// })

// const RegistrationModal = mongoose.model("registration", RegistrationSchema)
// module.exports = RegistrationModal

const getAllRegistrationSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    gender: String,
    email: String,
    mobile: Number,
    address: String
})

const getAllRegistrationModal = mongoose.model("allregistration", getAllRegistrationSchema)
module.exports = getAllRegistrationModal