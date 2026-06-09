import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  to: string;
  children?: React.ReactNode;
  variant?: "light" | "dark" | "onImage";
  className?: string;
};

const variantClasses = {
  light: "text-blue-600 hover:text-blue-800",
  dark: "text-blue-400 hover:text-blue-300",
  onImage: "text-blue-300 hover:text-white",
} as const;

export function TextLink({
  to,
  children = "Saiba mais",
  variant = "light",
  className,
}: TextLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center font-semibold transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      {children} <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  );
}
