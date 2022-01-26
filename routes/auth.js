const router = require('express').Router()
const User = require('../model/User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { authPage } = require('./middleware')
const { validationregister, validationlogin } = require('../validate')

router.post('/register', async (req, res) => {
 
    const {error} = validationregister(req.body)
    if (error) return res.status(400).send(error.details[0].message)


    const emailexist = await User.findOne({email : req.body.email})
    if (emailexist) return res.status(400).send('email already exist')

    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)



    const user = new User({
        name: req.body.name,
        email: req.body.email, 
        password: hashpassword,
       
        
    });
    
    try{
      const saveuser = await user.save();
      res.send({saveuser});
    }catch(err){
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
 
    const {error} = validationlogin(req.body)
    if (error) return res.status(400).send(error.details[0].message)


    const user = await User.findOne({email : req.body.email})
    if (!user) return res.status(400).send("email doesn't exist")

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send({status:400, message: "Invalid Password"});

    const token = jwt.sign({ _id: User._id}, process.env.Token_secret)
    res.header('auth-token', token).send(token)



   
   
})

router.get('/hotels', authPage(["admin","owner"]), async (req, res) => {
    res.send('Home Page Hotels')
   
})

module.exports = router


