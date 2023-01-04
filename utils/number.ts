import client from "../configs/whatsapp";

export const phoneNumberFormatter = function (number: string) {
  let formatted = number.replace(/\D/g, "");
  if (formatted.startsWith("0")) {
    formatted = "62" + formatted.substr(1);
  }

  if (!formatted.endsWith("@c.us")) {
    formatted += "@c.us";
  }

  return formatted;
};

export const isRegisteredNumber = async function (number: string) {
  const isRegistered = await client.isRegisteredUser(number);
  return isRegistered;
};
