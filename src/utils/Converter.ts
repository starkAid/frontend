import { Buffer } from "buffer";

export function feltToString(felt: string): string {
  const buffer = Buffer.from(felt.replace("0x", ""), "hex");
  return buffer.toString();
}

export function stringToFelt(inputString: string) {
  const hexStr = Buffer.from(inputString, "utf-8").toString("hex");
  return BigInt(`0x${hexStr}`);
}
