import { ReactNode } from "react";

export default function Section({ title, intro, children, className = "" }: { title?: ReactNode; intro?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section className={`surface p-6 md:p-8 ${className}`}>
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      {intro && <p className="mt-2 text-neutral-700">{intro}</p>}
      {children && <div className={title || intro ? "mt-4" : undefined}>{children}</div>}
    </section>
  );
}


