const express=require("express")
const router=express.Router()
const{getShow,postShow}=require("../controllers/showtimeController")
 const verifyToken=require("../Middlewares/authMiddleware")
const authorizeRoles=require("../Middlewares/roleMiddleware")
router.get("/getShow",verifyToken,getShow)
router.post("/postShow",verifyToken, authorizeRoles('admin'),postShow)

module.exports=router;