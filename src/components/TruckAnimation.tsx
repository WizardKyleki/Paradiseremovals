"use client";

export default function TruckAnimation({
  reverse,
  bgColor = "bg-white",
}: {
  reverse?: boolean;
  bgColor?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${bgColor}`}
      style={{ height: "80px" }}
    >
      {/* Road */}
      <div className="absolute bottom-[8px] left-0 right-0 h-[3px] bg-navy-deep/10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--color-navy-deep) 0px, var(--color-navy-deep) 20px, transparent 20px, transparent 40px)",
            opacity: 0.15,
          }}
        />
      </div>

      {/* Truck */}
      <div
        className={
          reverse
            ? "truck-drive-reverse absolute bottom-[10px]"
            : "truck-drive absolute bottom-[10px]"
        }
      >
        <div style={reverse ? { transform: "scaleX(-1)" } : undefined}>
          <svg
            width="120"
            height="52"
            viewBox="0 0 120 52"
            fill="none"
            className="truck-bounce"
          >
            <rect x="0" y="8" width="72" height="30" rx="4" fill="#111FA2" />
            <text x="36" y="22" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#FFDE42" fontFamily="sans-serif">PARADISE</text>
            <text x="36" y="30" textAnchor="middle" fontSize="4.5" fontWeight="600" fill="white" fontFamily="sans-serif">REMOVALS</text>
            <path d="M72 14 H72 V38 H96 V24 C96 24 96 18 90 14 Z" fill="#0a1470" />
            <path d="M74 16 H88 C92 16 94 20 94 24 V28 H74 Z" fill="#53CBF3" opacity="0.6" />
            <rect x="94" y="30" width="8" height="8" rx="2" fill="#0a1470" />
            <rect x="100" y="32" width="3" height="4" rx="1" fill="#FFDE42" />
            <rect x="2" y="38" width="94" height="4" rx="2" fill="#090d3d" />
            <circle cx="22" cy="44" r="8" fill="#1a1a2e" />
            <circle cx="22" cy="44" r="5" fill="#333" />
            <circle cx="22" cy="44" r="2" fill="#888" className="truck-wheel-spin" />
            <circle cx="82" cy="44" r="8" fill="#1a1a2e" />
            <circle cx="82" cy="44" r="5" fill="#333" />
            <circle cx="82" cy="44" r="2" fill="#888" className="truck-wheel-spin" />
            <circle cx="-6" cy="36" r="4" fill="#111FA2" opacity="0.08" className="truck-smoke-1" />
            <circle cx="-14" cy="32" r="5" fill="#111FA2" opacity="0.05" className="truck-smoke-2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
