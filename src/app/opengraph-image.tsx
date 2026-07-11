import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${BUSINESS.name} — lawn care, landscaping, and snow removal in Dale City, VA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F2820",
          backgroundImage:
            "linear-gradient(135deg, #0F2820 0%, #173F35 55%, #2A5C4A 100%)",
          color: "#F4F7F5",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7E959E",
            fontWeight: 600,
          }}
        >
          Dale City · Prince William County
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
            {BUSINESS.name}
          </div>
          <div style={{ fontSize: 32, color: "#E4EBE7", maxWidth: 900 }}>
            Lawn care, landscaping, and snow removal—every season.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#C47B2D",
            fontWeight: 700,
          }}
        >
          <span>{BUSINESS.phoneDisplay}</span>
          <span style={{ color: "#E4EBE7", fontWeight: 500 }}>
            fourseasonalservices.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
