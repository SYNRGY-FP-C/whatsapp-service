import app from "./app";
import client from "./configs/whatsapp";
import logger from "./utils/logger";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  logger.info(
    `Server is running on port ${PORT}. Open http://localhost:${PORT}/ to access it.`
  );
});

client.initialize();
