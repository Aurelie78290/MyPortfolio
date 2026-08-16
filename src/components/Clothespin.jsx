function Clothespin({ className, color = "#c9a06a" }) {
  return (
    <svg
      className={className}
      width="18"
      height="30"
      viewBox="0 0 18 30"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="0" width="7" height="30" rx="3" fill={color} />
      <rect x="10" y="0" width="7" height="30" rx="3" fill={color} />
      <rect x="0" y="12" width="18" height="5" rx="2" fill="#8a8f98" />
    </svg>
  );
}

export default Clothespin;
