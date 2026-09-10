export default function HeroCanvas() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Vertical Lined Notebook Paper Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "52px 100%",
          backgroundPosition: "center top",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 0, 0, 0.15) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 0, 0, 0.15) 100%)",
        }}
      />
    </div>
  );
}


