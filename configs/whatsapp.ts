import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";

import logger from "../utils/logger";
const client = new Client({
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  logger.info("Client is ready!");
});

export default client;
