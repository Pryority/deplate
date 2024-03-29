import { Database } from "bun:sqlite";
import type { FeParams } from "./types";

const db = new Database("../db.slite");
db.exec("PRAGMA template_mode = WAL;");

export const frontend_table_query =
  db.prepare(`CREATE TABLE IF NOT EXISTS frontend (
  frontend_id INTEGER PRIMARY KEY AUTOINCREMENT,
  framework INTEGER NOT NULL,
  typescript BOOL NOT NULL
  )`);

export const backend_table_query =
  db.prepare(`CREATE TABLE IF NOT EXISTS backend (
  backend_id INTEGER PRIMARY KEY AUTOINCREMENT,
  ponder BOOL NOT NULL,
  database INTEGER NOT NULL
  )`);

export const template_table_query =
  db.prepare(`CREATE TABLE IF NOT EXISTS template (
  template_id INTEGER PRIMARY KEY AUTOINCREMENT,
  frontend_id INTEGER NOT NULL,
  backend_id INTEGER NOT NULL
  )`);

export function create_new_frontend(params: FeParams): void {
  const { framework, typescript } = params;
  const query = db.query(
    `INSERT INTO frontend (framework, typescript) VALUES (?, ?)`,
  );
  query.run(framework, typescript);
}

export function get_frontend(): void {
  const query = db.query(`SELECT * FROM frontend`);
  const frontend = query.run();
  return frontend;
}

export function create_new_backend({}): void {}
export function create_new_template({}): void {}
