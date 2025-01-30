"use client";

export function AddItemForm({ onAdd }: { onAdd: (item: string) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      newItem: { value: string };
    };

    onAdd(formElements.newItem.value);
    formElements.newItem.value = ""; // Reset input value
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        name="newItem"
        type="text"
        className={
          "flex-grow flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        }
        placeholder="Add new item"
      />
      <button
        className="bg-primary text-primary-foreground shadow h-9 px-4 py-2 rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
