import { Database } from "bun:sqlite";
import type {
  FeParams,
  BeParams,
  FeModel,
  TemplParams,
  BeModel,
} from "./types";

const db = new Database("../db.slite");
db.exec("PRAGMA template_mode = WAL;");

export function initializeDatabase() {
  // Drop tables if they exist
  db.exec("DROP TABLE IF EXISTS frontend");
  db.exec("DROP TABLE IF EXISTS backend");
  db.exec("DROP TABLE IF EXISTS template");

  // Create tables
  db.exec(`CREATE TABLE frontend (
    frontend_id INTEGER PRIMARY KEY AUTOINCREMENT,
    framework INTEGER NOT NULL,
    typescript BOOL NOT NULL
  )`);

  db.exec(`CREATE TABLE backend (
    backend_id INTEGER PRIMARY KEY AUTOINCREMENT,
    ponder BOOL NOT NULL,
    database INTEGER NOT NULL
  )`);

  db.exec(`CREATE TABLE template (
    template_id INTEGER PRIMARY KEY AUTOINCREMENT,
    frontend_id INTEGER NOT NULL,
    backend_id INTEGER NOT NULL
  )`);
}

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

export function get_frontend() {
  const query = db.prepare(`SELECT * FROM frontend`);
  const frontend = query.all();
  return frontend[0] as FeModel;
}

export function create_new_backend(params: BeParams): void {
  const { ponder, database } = params;
  const query = db.query(
    `INSERT INTO backend (ponder, database) VALUES (?, ?)`,
  );
  query.run(ponder, database);
}

export function get_backend() {
  const query = db.prepare(`SELECT * FROM backend`);
  const backend = query.all();
  return backend[0] as BeModel;
}

export function create_new_template(params: TemplParams): void {
  const { frontend_id, backend_id } = params;
  const query = db.query(
    `INSERT INTO template (frontend_id, backend_id) VALUES (?, ?)`,
  );
  query.run(frontend_id, backend_id);
}

initializeDatabase();
