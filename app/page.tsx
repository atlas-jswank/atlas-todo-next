import { db } from "@/db";
import { AddItemForm } from "./components/AddItemForm";
import { TodoList } from "./components/TodoList";
import { revalidatePath } from "next/cache";

export default async function TodoListApp() {
  const items = await db.all("SELECT * FROM todos;");

  async function addItem(item: string) {
    "use server";
    await db.run(
      "INSERT INTO todos (id, todoText, completed) VALUES (?, ?, ?)",
      [new Date().getTime(), item, false]
    );

    revalidatePath("/");
  }

  async function removeItem(id: number) {
    "use server";
    await db.run("DELETE FROM todos WHERE id = ?", [id]);

    revalidatePath("/");
  }

  async function toggleItem(id: number) {
    "use server";
    const items = await db.all("SELECT * FROM todos;");
    const item = items.find((item) => item.id === id);
    if (!item) return;
    await db.run("UPDATE todos SET completed = ? WHERE id = ?", [
      !item.completed,
      id,
    ]);

    revalidatePath("/");
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddItemForm onAdd={addItem} />
      <TodoList items={items} onRemove={removeItem} toggleItem={toggleItem} />
    </div>
  );
}
