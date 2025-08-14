import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const title = searchParams.get("title") || "שיעורי גיטרה ופסנתר באשקלון";
  const subtitle = searchParams.get("subtitle") || "דורון כהן";
  const logoUrl = `${origin}/logo.svg`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={logoUrl} width={120} height={120} style={{ borderRadius: 16 }} />
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 64, fontWeight: 800 }}>{title}</div>
            <div style={{ fontSize: 32, opacity: 0.9 }}>{subtitle}</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}


