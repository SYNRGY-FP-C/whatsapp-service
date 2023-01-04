import { NextFunction, Request, Response } from "express";

import logger from "../../utils/logger";

interface AppError extends Error {
  status: number;
}

// eslint-disable-next-line unused-imports/no-unused-vars
const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line unused-imports/no-unused-vars
  next: NextFunction
) => {
  logger.error(error);
  const errorStatus = (error as AppError).status || 500;
  const errorMessage = error.message || "Something went wrong";
  res.status((error as AppError).status).json({
    status: errorStatus,
    message: errorMessage,
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  });
  return;
};

export default errorHandler;
