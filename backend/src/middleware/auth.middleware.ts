import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";

export const verifyJWT = (req: Request, _res: Response, next: NextFunction) => {
  const token =
    req.cookies?.accessToken || req.headers.authorization?.split(" ")[1];

  if (!token) throw new ApiError(401, "No token provided");

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
    (req as any).user = decoded;
    next();
  } catch (err) {
    throw new ApiError(401, "Invalid or expired token");
  }
};
