import { test, it, expect } from "bun:test";
import {
  create_new_backend,
  create_new_frontend,
  get_backend,
  get_frontend,
} from "../src/db";
import type { BeParams, FeParams } from "../src/types";

test("Gets frontend options from db", () => {
  const params = {
    framework: 0,
    typescript: true,
  } as FeParams;

  create_new_frontend(params);
  const newFrontend = get_frontend();

  expect(newFrontend).toEqual({
    frontend_id: 1,
    framework: params.framework,
    typescript: params.typescript ? 1 : 0,
  });
});

test("Gets frontend options from db", () => {
  const params = {
    ponder: true,
    database: 0,
  } as BeParams;
  create_new_backend(params);
  expect(get_backend());
});
