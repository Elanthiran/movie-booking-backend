const express =require("express")

const router =express.Router()
const {dataForGetting,dataForPosting}=require("../controllers/itemController")
const verifyToken=require("../Middlewares/authMiddleware")
const authorizeRoles=require("../Middlewares/roleMiddleware")


router.get("/dataForGetting",verifyToken,dataForGetting)

router.post("/dataForPosting",verifyToken, authorizeRoles('admin'),dataForPosting)


module.exports=router;