import { cn } from "@/lib/utils";

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  onClick?: () => void;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button
      type="button"
      className={cn(`${baseStyle} ${styles} ${modifier ?? ``}`)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
