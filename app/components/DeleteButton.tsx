"use client";

import { Trash2 } from "lucide-react";

export function DeleteButton({
  id,
  onRemove,
}: {
  id: number;
  onRemove: (id: number) => void;
}) {
  function removeItem() {
    onRemove(id);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    removeItem();
  }
  return (
    <form onSubmit={handleSubmit}>
      <button className="hover:bg-accent hover:text-accent-foreground h-9 w-9">
        <Trash2 className="h-4 w-4" />
      </button>
    </form>
  );
}
