"use client";

import { usePathname } from "next/navigation";

// Injects BreadcrumbList JSON-LD based on current path. Non-visual.
export default function BreadcrumbsJsonLd() {
  const pathname = usePathname() || "/";

  // Map URL segments to readable names. Adjust labels as needed.
  const labels: Record<string, string> = {
    "": "דף הבית",
    lessons: "השיעורים",
    prices: "מחירים",
    faq: "שאלות נפוצות",
    booking: "קביעת שיעור",
    contact: "צור קשר",
    terms: "תנאי שימוש",
    privacy: "מדיניות פרטיות",
    accessibility: "הצהרת נגישות",
  };

  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const parts = [""];
  for (const seg of segments) {
    parts.push([parts[parts.length - 1], seg].filter(Boolean).join("/"));
  }

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const itemListElement = parts.map((p, idx) => {
    const lastSegment = p.split("/").filter(Boolean).pop() || "";
    const name = labels[lastSegment] ?? (lastSegment || labels[""]);
    const url = origin + (p || "/");
    return {
      "@type": "ListItem",
      position: idx + 1,
      name,
      item: url,
    };
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script id="ld-breadcrumbs" type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
}


