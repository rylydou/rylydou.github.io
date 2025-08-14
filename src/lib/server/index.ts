import { idGenerator } from "./nanoid";

export * as serverConfig from "./config";
export * from "./nanoid";

export const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
export const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const digits = "0123456789";

export const alphaID = idGenerator(lowerAlpha, 6);
export const alphanumID = idGenerator(lowerAlpha + digits, 4);
export const alphanumcaseID = idGenerator(lowerAlpha + upperAlpha + digits, 16);

// 400 days
export const maxCookieAge = 60 * 60 * 24 * 400;
