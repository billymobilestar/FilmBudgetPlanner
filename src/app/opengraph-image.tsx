import { ImageResponse } from "next/og";

export const alt = "Film Budget Planner — Budget Smarter. Produce Better.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(200, 255, 0, 0.15), transparent), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(200, 255, 0, 0.1), transparent)",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#C8FF00",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 800,
              color: "#0A0A0A",
            }}
          >
            F
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#FFFFFF",
              fontWeight: 700,
            }}
          >
            Film Budget Planner
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "92px",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.05,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Budget Smarter.</span>
          <span style={{ color: "#C8FF00" }}>Produce Better.</span>
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: "30px",
            color: "#A0A0A0",
            marginTop: "32px",
            maxWidth: "900px",
          }}
        >
          The professional budget planner for filmmakers. AI estimates, team
          collaboration, beautiful exports.
        </div>

        {/* Trial badge */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "rgba(200, 255, 0, 0.12)",
            border: "2px solid rgba(200, 255, 0, 0.3)",
            borderRadius: "999px",
            padding: "12px 24px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "#C8FF00",
              fontWeight: 700,
            }}
          >
            7 days free — no credit card required
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
