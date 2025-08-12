import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-[color:var(--accent)] text-[color:var(--accent-contrast)] font-bold hover:bg-orange-700",
    secondary: "border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:bg-[color:var(--background)]",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}


