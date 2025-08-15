import { ReactNode } from "react";

export default function Section({ id, title, intro, children, className = "" }: { id?: string; title?: ReactNode; intro?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={`surface p-4 md:p-5 ${className}`}>
      {title && <h2 className="text-[22px] md:text-2xl font-semibold text-center">{title}</h2>}
      {intro && <p className="mt-1 text-[color:var(--muted)] text-center">{intro}</p>}
      {children && <div className={title || intro ? "mt-2.5" : undefined}>{children}</div>}
    </section>
  );
}


