import { ReactNode } from "react";

export default function Section({ id, title, intro, children, className = "" }: { id?: string; title?: ReactNode; intro?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={`surface p-3.5 md:p-4 ${className}`}>
      {title && <h2 className="text-xl md:text-[22px] font-semibold text-center">{title}</h2>}
      {intro && <p className="mt-1 text-[color:var(--muted)] text-center">{intro}</p>}
      {children && <div className={title || intro ? "mt-2" : undefined}>{children}</div>}
    </section>
  );
}


