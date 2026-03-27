import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "LocManage — Gestion locative sur iPhone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAF5EB 0%, #F0E8D8 50%, #E8DCC8 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(201, 168, 107, 0.12)",
          }}
        />
        {/* Decorative circle bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(201, 168, 107, 0.08)",
          }}
        />

        {/* App icon */}
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "linear-gradient(135deg, #C9A86B 0%, #B8944F 100%)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            boxShadow: "0 12px 40px rgba(201, 168, 107, 0.3)",
          }}
        >
          <div
            style={{
              fontSize: 48,
              display: "flex",
            }}
          >
            🏠
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#1A1209",
            letterSpacing: "-0.03em",
            marginBottom: 16,
            display: "flex",
          }}
        >
          LocManage
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#5C4A38",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Gestion locative simplifiee pour iPhone
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {["Baux", "Loyers", "Signatures", "Etats des lieux"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 100,
                background: "rgba(201, 168, 107, 0.15)",
                color: "#8B7040",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #C9A86B 0%, #B8944F 50%, #C9A86B 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
