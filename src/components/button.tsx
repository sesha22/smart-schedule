export function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-bold bg-amber-500 text-black rounded-lg text-sm"
    >
      {children}
    </button>
  );
}
