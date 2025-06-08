export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="px-4 py-2 font-bold bg-amber-500 text-black rounded-lg text-sm"
    />
  );
}
