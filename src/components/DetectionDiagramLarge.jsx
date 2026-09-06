export default function DetectionDiagramLarge() {
  return (
    <svg
      viewBox="0 0 700 300"
      role="img"
      aria-label="Illustration of a technical drawing with detection boxes labeling a View, a Note block, and a Table region"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <pattern id="dots2" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#ffffff12" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="700" height="300" fill="url(#dots2)" />

      <rect x="50" y="35" width="220" height="150" fill="none" stroke="#4a5164" strokeWidth="1.5" />
      <line x1="50" y1="35" x2="270" y2="185" stroke="#4a5164" strokeWidth="1" />
      <line x1="270" y1="35" x2="50" y2="185" stroke="#4a5164" strokeWidth="1" />
      <circle cx="160" cy="110" r="28" fill="none" stroke="#4a5164" strokeWidth="1.5" />
      <rect x="130" y="150" width="60" height="20" fill="none" stroke="#4a5164" strokeWidth="1" />

      <line x1="340" y1="50" x2="470" y2="50" stroke="#4a5164" strokeWidth="2" />
      <line x1="340" y1="68" x2="450" y2="68" stroke="#4a5164" strokeWidth="2" />
      <line x1="340" y1="86" x2="460" y2="86" stroke="#4a5164" strokeWidth="2" />
      <line x1="340" y1="104" x2="420" y2="104" stroke="#4a5164" strokeWidth="2" />
      <line x1="340" y1="122" x2="440" y2="122" stroke="#4a5164" strokeWidth="2" />

      <g stroke="#4a5164" strokeWidth="1">
        <rect x="340" y="170" width="270" height="110" fill="none" />
        <line x1="340" y1="205" x2="610" y2="205" />
        <line x1="340" y1="240" x2="610" y2="240" />
        <line x1="430" y1="170" x2="430" y2="280" />
        <line x1="520" y1="170" x2="520" y2="280" />
      </g>

      <g stroke="var(--hue-view)" strokeWidth="2.5" fill="none">
        <path d="M35,20 L35,40 M35,20 L55,20" />
        <path d="M285,20 L285,40 M285,20 L265,20" />
        <path d="M35,200 L35,180 M35,200 L55,200" />
        <path d="M285,200 L285,180 M285,200 L265,200" />
      </g>
      <text x="35" y="10" className="mono" fontSize="14" fill="var(--hue-view)">VIEW</text>

      <g stroke="var(--hue-note)" strokeWidth="2.5" fill="none">
        <path d="M326,36 L326,56 M326,36 L346,36" />
        <path d="M484,36 L484,56 M484,36 L464,36" />
        <path d="M326,138 L326,118 M326,138 L346,138" />
        <path d="M484,138 L484,118 M484,138 L464,138" />
      </g>
      <text x="326" y="26" className="mono" fontSize="14" fill="var(--hue-note)">NOTE</text>

      <g stroke="var(--hue-table)" strokeWidth="2.5" fill="none">
        <path d="M326,156 L326,176 M326,156 L346,156" />
        <path d="M624,156 L624,176 M624,156 L604,156" />
        <path d="M326,294 L326,274 M326,294 L346,294" />
        <path d="M624,294 L624,274 M624,294 L604,294" />
      </g>
      <text x="326" y="146" className="mono" fontSize="14" fill="var(--hue-table)">TABLE</text>
    </svg>
  );
}
