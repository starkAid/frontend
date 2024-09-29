import { Buffer } from "buffer";
import { CID } from "multiformats";
import { base36 } from "multiformats/bases/base36";
import { base58btc } from "multiformats/bases/base58";
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

export function base58CidToBase36(cidBase58: string): string {
  const decodedBytes = bs58.decode(cidBase58);
  const cid = CID.decode(decodedBytes);
  const cidBase36 = cid.toString(base36);
  return cidBase36;
}

export function convertCidBase36ToBase58(cidBase36: string): string {
  const cid = CID.parse(cidBase36, base36);
  return cid.toString(base58btc);
}
