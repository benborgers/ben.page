import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const getReader = () => {
  // @ts-ignore
  const reader = createReader(process.cwd(), keystaticConfig);
  return reader;
};
