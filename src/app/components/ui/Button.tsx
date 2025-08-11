import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel" | "aria-label" | "onClick"> & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className = "", children } = props;
  const style =
    variant === "primary"
      ? "bg-black text-white hover:bg-neutral-800"
      : variant === "secondary"
      ? "border hover:bg-black/5"
      : "hover:bg-black/5";

  const base = `inline-flex items-center justify-center rounded-xl px-4 py-2 focus-visible:ring-2 focus-visible:ring-black ${style} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props as LinkProps;
    return (
      <Link href={href} className={base} target={target} rel={rel} onClick={onClick} aria-label={props["aria-label"]}>
        {children}
      </Link>
    );
  }

  const { variant: _ignore1, className: _ignore2, children: _ignore3, ...buttonProps } = props as ButtonProps;
  return (
    <button className={base} {...buttonProps}>
      {children}
    </button>
  );
}


