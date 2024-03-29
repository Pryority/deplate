import {
  create_new_backend,
  create_new_frontend,
  create_new_template,
} from "./db";
import type {
  BeParams,
  FeModel,
  BeModel,
  FeParams,
  TemplParams,
  TemplModel,
} from "./types";

export function create_frontend_handler(params: FeParams) {
  let newFrontend: unknown;
  try {
    newFrontend = create_new_frontend(params);
    console.log(`Frontend added successfully`);
  } catch (err) {
    console.error(err);
    console.error("Oops, Error!");
  }
  return newFrontend as FeModel;
}

export function create_backend_handler(params: BeParams) {
  let newBackend: unknown;
  try {
    newBackend = create_new_backend(params);
    console.log(`Backend added successfully`);
  } catch (err) {
    console.error(err);
    console.error("Oops, Error!");
  }
  return newBackend as BeModel;
}

export function create_template_handler(params: TemplParams) {
  let newTemplate: unknown;
  try {
    newTemplate = create_new_template(params);
    console.log(`Template added successfully`);
  } catch (err) {
    console.error(err);
    console.error("Oops, Error!");
  }
  return newTemplate as TemplModel;
}
