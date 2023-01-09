const express=require('express');
const router=express.Router();
const {registerUser,loginUser}=require('../controllers/userController')


//For register user
router.post('/',registerUser)


//For login user
router.post('/login',loginUser)

module.exports=router