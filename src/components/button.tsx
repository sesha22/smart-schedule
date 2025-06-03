export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="py-2 px-1 font-bold bg-amber-500 text-black rounded-2xl">
      {children}
    </button>
  );
}
