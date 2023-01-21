import { NextFunction, Request, Response } from "express";

import logger from "../../utils/logger";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    logger.info(token);
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
