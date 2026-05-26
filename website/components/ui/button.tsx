import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-navy text-white hover:bg-brand-navy-light shadow-md shadow-brand-navy/20",
  secondary:
    "bg-white text-brand-navy border-2 border-brand-navy hover:bg-brand-sky/30",
  outline:
    "border border-brand-navy/20 text-brand-navy hover:border-brand-blue hover:bg-brand-sky/20",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  href?: string;
};

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
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
