const asyncHandler = require('express-async-handler')
const User = require('../Schema/userSchema')
const generateToken = require('../Config/generateToken')

const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, pic } = req.body
    
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please Enter all the field")
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
        throw new Error("User already exists")
    }
    
    const user = await User.create({
        name,
        email,
        password,
        pic,
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error("Fail to register")
    }
})


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }) 
    const userPassword = await user.matchPassword(password)
    if (user && userPassword) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic
        })
    }
})

module.exports = { registerUser, authUser }
