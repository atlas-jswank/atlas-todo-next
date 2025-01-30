"use client";

export function Checkbox({
  checked,
  id,
  toggleItem,
}: {
  checked: boolean;
  id: number;
  toggleItem: (id: number) => void;
}) {
  return (
    <input
      type="checkbox"
      className="accent-primary peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      checked={checked}
      onChange={() => {
        toggleItem(id);
      }}
    />
  );
}
