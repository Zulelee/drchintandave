const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Text shadow layer (background) */}
      <div
        className="absolute inset-0"
        style={{
          textShadow: `
            2px 2px 0px #3182ce,
            4px 4px 0px #38b2ac,
            6px 6px 15px #38b2ac
          `,
          letterSpacing: "-0.02em",
          color: "var(--dark-blue)",
        }}
      >
        {text}
      </div>

      {/* Shiny text layer (foreground) */}
      <div
        className={`relative ${disabled ? "" : "animate-shine"}`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 55%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          animationDuration: animationDuration,
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.02em",
          color: "var(--dark-blue)",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ShinyText;
