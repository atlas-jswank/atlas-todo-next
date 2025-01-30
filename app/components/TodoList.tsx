import { TodoListItemData } from "../types";
import { TodoListItem } from "./TodoListItem";

export function TodoList({
  items,
  onRemove,
  toggleItem,
}: {
  items: TodoListItemData[];
  onRemove: (id: number) => void;
  toggleItem: (id: number) => void;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          toggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}
