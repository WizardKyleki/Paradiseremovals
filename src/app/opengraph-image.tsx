import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Paradise Removals – Gold Coast's Trusted Furniture Removalists";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "images", "logo-white.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background:
            "linear-gradient(145deg, #070e4a 0%, #111FA2 35%, #1a2db8 55%, #0a1470 100%)",
          fontFamily: "sans-serif",
          borderTop: "6px solid #FFDE42",
          borderBottom: "6px solid #FFDE42",
        }}
      >
        {/* Logo */}
        <img
          src={logoSrc}
          alt=""
          width={160}
          height={160}
          style={{
            marginBottom: "24px",
            borderRadius: "50%",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-1px",
            marginBottom: "8px",
            display: "flex",
          }}
        >
          Paradise Removals
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#FFDE42",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          Make Your Move a Breeze
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.7)",
            fontWeight: 500,
            display: "flex",
          }}
        >
          Gold Coast{"'"}s Trusted Furniture Removalists
        </div>
      </div>
    ),
    { ...size }
  );
}
