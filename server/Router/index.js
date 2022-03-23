const express = require("express");
const router = express.Router();
const multer = require("multer");
const userController = require("../Controller/userController")
const verifyToken = require("../Auth/verifyToken");
const { verifyRefreshToken, signAccessToken, signRefreshToken } = require("../Auth/jwtToken");
const productController = require("../Controller/productController");

const storage = multer.diskStorage({
    destination: (err,file,cb)=>{
        cb(null,"Images");
    },
    filename: (err,file,cb)=>{
        cb(null,file.originalname);
    }
})

router.get("/user", userController.getUser);
router.post("/user"
//,verifyToken.authenticateJWT
,multer().single("avatar")
//, multer({storage:storage}).single("avatar")
,userController.insertUser)

router.post("/auth/refresh-token", async(req,res,next)=>{
    try{
        const refToken = req.body.refreshToken;
        const userId = await verifyRefreshToken(refToken);
        const accessToken = await signAccessToken(userId);
        const refreshToken = await signRefreshToken(userId);
        //console.log("userId",user)
        res.send({accessToken, refreshToken});
    }
    catch(exception){
        console.log(exception)
    }
});

router.post("/products"
, productController.insertProduct);

module.exports = router;