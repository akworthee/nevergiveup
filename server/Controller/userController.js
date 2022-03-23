const userModel = require("../Model/userModel");
const loggedUserModel = require("../Model/loggedUserModel");
const {signAccessToken,signRefreshToken} = require("../Auth/jwtToken");
const bcrypt = require("bcrypt");

const hashPassword = async (password) =>{
    let salt = await bcrypt.genSalt(8);
    let hashed = await bcrypt.hash(password,salt);

    return hashed;
}

const comparePass = async (password, hashed) =>{
    let checkPass = await bcrypt.compare(password, hashed);
    return checkPass;
}

exports.getUser = async (req,res)=>{
    try{
        //const userDetails = await userModel.find({"username": req.query.username, "password": req.query.password});
        const userDetails = await userModel.find({"username": req.query.username});
        const isValid = await comparePass(req.query.password,userDetails[0].password)
        if(isValid){
            const userObject = Object.assign({},{Id: userDetails[0]._id})
        //const token = await accessToken.generateToken(userObject);
        const accessToken = await signAccessToken(userObject);
        const refreshToken = await signRefreshToken(userObject);
        //console.log("token", token);
        res.send({accessToken,refreshToken})
        }
        
        
    }
    catch(e){
        console.log(e)
    }
}

exports.insertUser = async (req,res)=>{
    try{
        console.log("reqBody", req.body);
        const hashed = await hashPassword(req.body.password)
        console.log("hashed", hashed);
        console.log("uuu",req.file);
        const user = new userModel();
        user.username = req.body.username;
        user.password = hashed;
        user.email = req.body.email;
        user.avatar = req.file.buffer;
        //user.avatar = req.body.avatar;

        const createUser = await user.save();
        console.log(createUser);
        res.send(createUser);
    }
    catch(e){
        console.log(e)
    }
}