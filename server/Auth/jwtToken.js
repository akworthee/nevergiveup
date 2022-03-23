const jwt = require("jsonwebtoken");

exports.generateToken = (userId)=>{
    console.log(userId);
    const token = jwt.sign(JSON.parse(JSON.stringify(userId)),process.env.SECRET,{ expiresIn: 10080 });
    return token;
}


module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '10080s',
                issuer: 'notreachable.com',
                audience: JSON.stringify(userId),
            }

            jwt.sign(payload,secret, options, (err, token)=>{
                if(err){
                    console.log(err.message);
                    reject("not auth");
                }

                resolve(token)
            })
        })
    },
    verifyAccessToken:(accessToken) => {
    
        return new Promise((resolve, reject)=>{
            if (accessToken) {
                //const token = authHeader.split(' ')[1];
                //const token = authHeader;
                jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                    if (err) {
                         reject("403 not auth");
                    }
        
                    resolve(user.aud);
                    //next();
                });
            } else {
                res.sendStatus(401);
            }
        })
        //const authHeader = req.headers.accessToken;
    },
    signRefreshToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.REFRESH_TOKEN_SECRET;
            const options = {
                expiresIn: '10080s',
                issuer: 'notreachable.com',
                audience: JSON.stringify(userId),
            }

            jwt.sign(payload,secret, options, (err, token)=>{
                if(err){
                    console.log(err.message);
                    reject("not auth");
                }

                resolve(token)
            })
        })
    },
    verifyRefreshToken: (refreshToken) => {
        return new Promise((resolve, reject)=>{
            if (refreshToken) {
                //const token = authHeader.split(' ')[1];
                //const token = authHeader;
                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                    if (err) {
                        reject("403 not auth")
                    }
        
                    //req.user = user;
                    resolve(user.aud);
                });
            } else {
                res.sendStatus(401);
            }
        })
    }        //const authHeader = req.headers.refreshToken;
}


//module.exports = accessToken