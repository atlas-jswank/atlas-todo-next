"use client";

import { useState } from "react";
import { AddItemForm } from "./components/AddItemForm";
import { TodoList } from "./components/TodoList";
import { TodoListItemData } from "./types";

const DEFAULT_DATA: TodoListItemData[] = [
  {
    id: 1,
    name: "Apples",
    completed: false,
  },
  {
    id: 2,
    name: "Banana",
    completed: true,
  },
];

export default function TodoListApp() {
  // TODO: reaplce with call to db to read items
  const [items, setItems] = useState<TodoListItemData[]>(DEFAULT_DATA);

  function addItem(item: string) {
    // TODO: Replace with call to db to insert item
    const newItems = [...items];
    newItems.push({ id: Date.now(), name: item, completed: false });
    setItems(newItems);
  }

  function removeItem(id: number) {
    // TODO: Replace with call to db to remove item
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  function toggleItem(id: number) {
    // TODO: Replace with call to db to update item
    const newItems = items.map((item) => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    setItems(newItems);
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddItemForm onAdd={addItem} />
      <TodoList items={items} onRemove={removeItem} toggleItem={toggleItem} />
    </div>
  );
}
