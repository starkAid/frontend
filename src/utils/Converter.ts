import { Buffer } from "buffer";
import { CID } from "multiformats/cid";
import bs58 from "bs58";

export function feltToString(felt: string): string {
  const buffer = Buffer.from(felt.replace("0x", ""), "hex");
  return buffer.toString();
}

export function stringToFelt(inputString: string) {
  const hexStr = Buffer.from(inputString, "utf-8").toString("hex");
  return BigInt(`0x${hexStr}`);
}

export function dateToSeconds(dateString: string): bigint {
  const date = new Date(dateString);
  const seconds = Math.floor(date.getTime() / 1000);
  return BigInt(seconds);
}
