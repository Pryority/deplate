#! /usr/bin/env bun
import "./src/command.ts";
import {
  backend_table_query,
  frontend_table_query,
  template_table_query,
} from "./src/db.ts";

/* - QUERIES ------ */
frontend_table_query.run();
backend_table_query.run();
template_table_query.run();
