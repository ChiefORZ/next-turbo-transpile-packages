import { isBrowser, isServer } from "@example/lib-a";

export const generateInvalidMsg = (name: string) => {
  if (isServer()) {
    return `Hello from the server, ${name}!`;
  }
  if (isBrowser()) {
    return `Hello from the browser, ${name}!`;
  }
  return `Hello, ${name}!`;
}