import { NextFunction, Request, Response } from "express";

import client from "../../configs/whatsapp";
import logger from "../../utils/logger";
import { isRegisteredNumber, phoneNumberFormatter } from "../../utils/number";

const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  const { message } = req.body;
  const phone_number = phoneNumberFormatter(req.body.phone_number);

  if (!phone_number || !message) {
    res.status(400).json({
      code: 400,
      message: "Phone number and message are required",
    });
  }

  if (!isRegisteredNumber(phone_number)) {
    res.status(400).json({
      code: 400,
      message: "Phone number is not registered",
    });
  }

  try {
    await client.sendMessage(phone_number, message);

    res.status(200).json({
      code: 200,
      message: "Message sent successfully",
    });
    logger.info(`Message sent to ${phone_number}`);
  } catch (err) {
    next(err);
  }
};

export default {
  sendMessage,
};
