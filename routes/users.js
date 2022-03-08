const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const bcrypt = require("bcrypt")
const { User, signupJoi, loginJoi } = require("../models/User")
const validateBody = require("../middleware/validateBody")
const checkUser = require("../middleware/checkUser")


///Signup User/////////////////////////////////////////
router.post("/signup", validateBody(signupJoi), async (req, res) => {
  try {
    const { firstName, lastName, email, password, avatar } = req.body
    const userFound = await User.findOne({ email })
    if (userFound) return res.status(400).send(result.error.details[10].message)

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = new User({
      firstName,
      lastName,
      email,
      password: hash,
      avatar,
    })

    await user.save()
    delete user._doc.password

    res.json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
///////////LOGIN User/////////////////////////////////////
router.post("/login", validateBody(loginJoi), async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(404).send("User not found")

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) return res.status(400).send(" password incorrect")

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" })
    res.send(token)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

/////profile User
router.get("/profile", checkUser, async (req, res) => {
  const user = await User.findById(req.userId).select("-__v -password")
  res.json(user)
  
})

module.exports = router
