import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const isValid = token === process.env.TOKEN;
    if (!token || !isValid) {
      return res.status(401).json({
        code: 401,
        message: "Unauthorized",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};
