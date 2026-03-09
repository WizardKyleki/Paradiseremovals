type WaveDividerProps = {
  fillColor: string;
  bgColor?: string;
  variant?: "wave1" | "wave2" | "wave3";
  flip?: boolean;
};

const paths = {
  wave1: "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
  wave2: "M0,80 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1380,80 1440,50 L1440,120 L0,120 Z",
  wave3: "M0,40 C360,100 720,0 1080,80 C1260,120 1380,40 1440,60 L1440,120 L0,120 Z",
};

export default function WaveDivider({
  fillColor,
  bgColor = "transparent",
  variant = "wave1",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className="wave-divider"
      style={{
        background: bgColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] sm:h-[80px] lg:h-[100px]"
      >
        <path d={paths[variant]} fill={fillColor} />
      </svg>
    </div>
  );
}
