import { Buffer } from "buffer";
import { CID } from "multiformats";
import { base16 } from "multiformats/bases/base16";
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

export function base58CidToBase16Felt(cidBase58: string): bigint {
  try {
    const decodedBytes = bs58.decode(cidBase58);
    const cid = CID.decode(decodedBytes);
    const cidToConvert = cid.version === 0 ? cid.toV1() : cid;
    const cidBase16 = cidToConvert.toString(base16);
    return stringToFelt(cidBase16);
  } catch (error) {
    console.error("Error converting CID to base16 and felt:", error);
    throw new Error("Failed to convert CID to base16 and felt");
  }
}

export function convertFeltToBase58(felt: bigint): string {
  try {
    const cidBase16 = feltToString(felt.toString());
    const cid = CID.parse(cidBase16, base16);
    return cid.toString(base58btc);
  } catch (error) {
    console.error("Error converting felt to base58:", error);
    throw new Error("Failed to convert felt to base58");
  }
}
