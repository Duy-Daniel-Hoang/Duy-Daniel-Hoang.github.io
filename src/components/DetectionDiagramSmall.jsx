export default function DetectionDiagramSmall() {
  return (
    <svg
      viewBox="0 0 460 280"
      role="img"
      aria-label="Illustration of a technical drawing with detection boxes labeling a View, a Note block, and a Table region"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#ffffff12" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="460" height="280" fill="url(#dots)" />
      <rect x="34" y="30" width="150" height="110" fill="none" stroke="#4a5164" strokeWidth="1.5" />
      <line x1="34" y1="30" x2="184" y2="140" stroke="#4a5164" strokeWidth="1" />
      <line x1="184" y1="30" x2="34" y2="140" stroke="#4a5164" strokeWidth="1" />
      <circle cx="109" cy="85" r="20" fill="none" stroke="#4a5164" strokeWidth="1.5" />
      <line x1="230" y1="42" x2="330" y2="42" stroke="#4a5164" strokeWidth="2" />
      <line x1="230" y1="56" x2="310" y2="56" stroke="#4a5164" strokeWidth="2" />
      <line x1="230" y1="70" x2="320" y2="70" stroke="#4a5164" strokeWidth="2" />
      <line x1="230" y1="84" x2="290" y2="84" stroke="#4a5164" strokeWidth="2" />
      <g stroke="#4a5164" strokeWidth="1">
        <rect x="230" y="160" width="180" height="90" fill="none" />
        <line x1="230" y1="190" x2="410" y2="190" />
        <line x1="230" y1="220" x2="410" y2="220" />
        <line x1="290" y1="160" x2="290" y2="250" />
        <line x1="350" y1="160" x2="350" y2="250" />
      </g>
      <g stroke="var(--hue-view)" strokeWidth="2" fill="none">
        <path d="M22,22 L22,38 M22,22 L38,22" />
        <path d="M196,22 L196,38 M196,22 L180,22" />
        <path d="M22,152 L22,136 M22,152 L38,152" />
        <path d="M196,152 L196,136 M196,152 L180,152" />
      </g>
      <text x="22" y="14" className="mono" fontSize="12" fill="var(--hue-view)">VIEW</text>
      <g stroke="var(--hue-note)" strokeWidth="2" fill="none">
        <path d="M218,26 L218,42 M218,26 L234,26" />
        <path d="M342,26 L342,42 M342,26 L326,26" />
        <path d="M218,98 L218,82 M218,98 L234,98" />
        <path d="M342,98 L342,82 M342,98 L326,98" />
      </g>
      <text x="218" y="18" className="mono" fontSize="12" fill="var(--hue-note)">NOTE</text>
      <g stroke="var(--hue-table)" strokeWidth="2" fill="none">
        <path d="M218,148 L218,164 M218,148 L234,148" />
        <path d="M422,148 L422,164 M422,148 L406,148" />
        <path d="M218,262 L218,246 M218,262 L234,262" />
        <path d="M422,262 L422,246 M422,262 L406,262" />
      </g>
      <text x="218" y="140" className="mono" fontSize="12" fill="var(--hue-table)">TABLE</text>
    </svg>
  );
}
