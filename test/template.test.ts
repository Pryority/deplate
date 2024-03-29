import { test, it, expect } from "bun:test";
import { create_new_frontend, get_frontend } from "../src/db";
import type { FeParams } from "../src/types";

test("Gets frontend options from db", () => {
  const params = {
    framework: 0,
    typescript: true,
  } as FeParams;
  create_new_frontend(params);
  expect(get_frontend());
});
