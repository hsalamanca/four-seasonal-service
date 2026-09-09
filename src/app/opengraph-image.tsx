import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const alt = `${BUSINESS.name} — lawn care, landscaping, and snow removal in Dale City, VA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 86400;

function Mark() {
  const pane = {
    width: 30,
    height: 30,
    borderRadius: 7,
  };
  return (
    <div
      style={{
        display: "flex",
        width: 96,
        height: 96,
        borderRadius: 24,
        backgroundColor: "#0C1F19",
        border: "3px solid #C47B2D",
        padding: 14,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ ...pane, backgroundColor: "#7EBE74" }} />
        <div style={{ ...pane, backgroundColor: "#2F7A56" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ ...pane, backgroundColor: "#C47B2D" }} />
        <div style={{ ...pane, backgroundColor: "#A8B9BE" }} />
      </div>
    </div>
  );
}

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
          backgroundColor: "#0C1F19",
          color: "#F4F7F5",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Mark />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#A8B9BE",
              fontWeight: 600,
            }}
          >
            Dale City · Prince William County
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
            Four Seasonal
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#C47B2D",
              fontWeight: 600,
            }}
          >
            Services
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#E4EBE7", maxWidth: 900, marginTop: 8 }}>
            Lawn care, landscaping, and snow removal—every season.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
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
