function SectionTitle({
  subTitle,
  title,
  center = true,
}) {
  return (
    <div
      style={{
        textAlign: center
          ? "center"
          : "left",
        marginBottom: "60px",
      }}
    >
      <span
        style={{
          color: "#ff6b00",
          fontWeight: "700",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontSize: "14px",
        }}
      >
        {subTitle}
      </span>

      <h2
        style={{
          fontSize: "3rem",
          marginTop: "15px",
          lineHeight: "1.2",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;