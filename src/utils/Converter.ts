import { ethers } from "ethers";

export const stringToHex = (str: string) => {
  // Convert the string to UTF-8 bytes and from UTF-8 bytes to hexadecimal
  const utf8Bytes = ethers.toUtf8Bytes(str);
  const hexString = ethers.hexlify(utf8Bytes);

  return hexString;
};
