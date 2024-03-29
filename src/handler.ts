import { create_new_frontend } from "./db";
import type { FeParams } from "./types";

export function create_frontend_handler(params: FeParams) {
  try {
    create_new_frontend(params);
    console.log(`Frontend added successfully`);
  } catch (err) {
    console.error(err);
    console.error("Oops, Error!");
  }
}
