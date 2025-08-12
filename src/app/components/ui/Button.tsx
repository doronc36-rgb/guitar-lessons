import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel" | "onClick"> & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className = "", children } = props as BaseProps;
  const style =
    variant === "primary"
      ? "bg-[color:var(--accent)] text-[color:var(--accent-contrast)] hover:brightness-95"
      : variant === "secondary"
      ? "border hover:bg-black/5"
      : "hover:bg-black/5";

  const base = `inline-flex items-center justify-center rounded-xl px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] ${style} ${className}`;

  if ((props as LinkProps).href !== undefined) {
    const { href, target, rel, onClick } = props as LinkProps;
    return (
      <Link href={href} className={base} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...(props as ButtonProps)}>
      {children}
    </button>
  );
}


