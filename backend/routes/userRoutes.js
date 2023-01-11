const express=require('express');
const router=express.Router();
const {registerUser,loginUser,getMe}=require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')


//For register user
router.post('/',registerUser)


//For login user
router.post('/login',loginUser)


// For protected route
router.get('/me',protect,getMe)

module.exports=router