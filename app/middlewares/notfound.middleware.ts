import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    code: 404,
    message: "Not found",
  });
};

export default notFound;
