import { auth } from "express-oauth2-jwt-bearer";
import {NextFunction, Request as ExpressRequest,Response} from 'express'
import jwt from 'jsonwebtoken'
import client from "../conn";

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});

// export const jwtParse = async(req:Request,res:Response,next:NextFunction) => {
//   const {authorization} = req.headers;

//   if(!authorization || !authorization.startsWith("Bearer ")) {
//     return res.sendStatus(401);
//   }

//   const token = authorization.split(" ")[1]; 

//   try {
//     const decoded = jwt.decode(token) as jwt.JwtPayload;
//     const auth0Id = decoded.sub;
//     const conn = await client.connect();
//     const query = `
//       SELECT * FROM users
//       WHERE auth0Id = $1
//     `;
//     const auth0IdString = auth0Id ? String(auth0Id) : 'default_value';
//     const result = client.query(query, [auth0IdString], (err, results) => { 
//       if(err) throw err;
//       const user = results.rows[0];
//       if(!user) {
//         return res.sendStatus(401);
//       }
//       req.headers = user;
//       next();
//     })

    

//   } 
//   catch(error) {
//     return res.sendStatus(401);
//   }
// }

// interface RequestWithUser extends ExpressRequest {
//   auth0Id?:any;
// }
// export const jwtParse = async (req: RequestWithUser, res: Response, next: NextFunction) => {
//   const { authorization } = req.headers;

//   if (!authorization || !authorization.startsWith("Bearer ")) {
//       return res.sendStatus(401);
//   }

//   const token = authorization.split(" ")[1];

//   try {
//       const decoded = jwt.decode(token) as jwt.JwtPayload;
//       const auth0Id = decoded.sub;

//       const query = `
//           SELECT * FROM users
//           WHERE auth0Id = $1
//       `;
//       const auth0IdString = auth0Id ? String(auth0Id) : 'default_value';
//       const result = await client.query(query, [auth0IdString]);

//       if (result.rows.length === 0) {
//           return res.sendStatus(401);
//       }

//       req.auth0Id = result.rows[0];
//       next();
//   } catch (error) {
//       console.error(error);
//       return res.sendStatus(401);
//   }
// };

