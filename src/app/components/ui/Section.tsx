import { ReactNode } from "react";

export default function Section({ id, title, intro, children, className = "" }: { id?: string; title?: ReactNode; intro?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={`surface p-8 md:p-12 ${className}`}>
      {title && <h2 className="text-2xl font-semibold text-center">{title}</h2>}
      {intro && <p className="mt-2 text-[color:var(--muted)] text-center">{intro}</p>}
      {children && <div className={title || intro ? "mt-4" : undefined}>{children}</div>}
    </section>
  );
}


