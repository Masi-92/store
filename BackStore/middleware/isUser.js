import Jwt from "jsonwebtoken";


export const isUser = (req, res, next) => {
    try {
        const token = req.headers.token;
        const decode = Jwt.verify(token, process.env.JWT_SECRET);

        if (decode.role !== "user")
          throw new Error()
        req.user = decode;
        next();
    } catch (error) {
        res.status(403).send({message: "access denied"});
    }
};
