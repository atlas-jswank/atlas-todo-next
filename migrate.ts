import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
  filename: "./database.db",
  driver: sqlite3.Database,
});

export async function migrate() {
  await db.exec("DROP table IF EXISTS todos;");
  await db.exec(
    "CREATE TABLE IF NOT EXISTS todos (todoText TEXT, completed BOOLEAN);"
  );

  await db.exec("DELETE FROM todos;");
}

migrate();
