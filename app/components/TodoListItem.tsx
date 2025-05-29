"use client";

import { TodoListItemData } from "../types";
import { DeleteButton } from "./DeleteButton";
import { Checkbox } from "./Checkbox";

export function TodoListItem({
  item,
  onRemove,
  toggleItem,
}: {
  item: TodoListItemData;
  onRemove: (id: number) => void;
  toggleItem: (id: number) => void;
}) {
  return (
    <li className="flex items-center justify-between p-2 bg-secondary rounded-md">
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={item.completed}
          id={item.id}
          toggleItem={toggleItem}
        />
        <label
          htmlFor={`item-${item.id}`}
          className={`text-sm ${
            item.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {item.todoText}
        </label>
      </div>
      <DeleteButton id={item.id} onRemove={onRemove} />
    </li>
  );
}
