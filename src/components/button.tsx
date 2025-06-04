export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 font-bold bg-amber-500 text-black rounded-lg text-sm">
      {children}
    </button>
  );
}
