const jwt = require("jsonwebtoken");

exports.authenticateJWT = (req, res, next) => {
    
    const authHeader = req.headers.authorization;

    if (authHeader) {
        //const token = authHeader.split(' ')[1];
        const token = authHeader;
        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};