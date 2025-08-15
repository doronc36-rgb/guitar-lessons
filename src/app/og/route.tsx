import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "שיעורי גיטרה ופסנתר באשקלון";
  const subtitle = searchParams.get("subtitle") || "דורון כהן";
  const width = 1200;
  const height = 630;
  const logoUrl = new URL("/logo.svg", request.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0b1220",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          padding: 48,
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <img src={logoUrl} width={72} height={72} style={{ borderRadius: 12 }} />
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, marginBottom: 12 }}>{title}</div>
        <div style={{ fontSize: 32, opacity: 0.9 }}>{subtitle}</div>
      </div>
    ),
    { width, height }
  );
}


