export default function AgentFlowDiagram() {
  return (
    <svg
      viewBox="-70 0 490 680"
      role="img"
      aria-label="Diagram of the Flickrz multi-agent pipeline: the Script Writer Agent produces four outputs (story content, dialogue, scene prompt, character sketch prompt), then script and character lanes fork, merge at the Human Reviewer Team gate, pass through the Image Generation & Training System twice, then ship as chapter output. Three dashed lines show revise loops back to the Script Writer Agent."
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <marker id="afdMain" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--ink-faint)" />
        </marker>
        <marker id="afdReject" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)" />
        </marker>
      </defs>

      <g fill="none" stroke="var(--ink-faint)" strokeWidth="1.4" markerEnd="url(#afdMain)">
        <path d="M190,50 L190,76" />
        <path d="M190,124 L190,190" />
        <path d="M100,234 C100,260 150,260 150,380" />
        <path d="M280,332 C280,356 230,356 230,380" />
        <path d="M190,428 L190,454" />
        <path d="M190,530 L190,556" />
        <path d="M190,596 L190,622" />
        <path d="M280,266 L280,292" />
      </g>

      <g fill="none" stroke="var(--accent)" strokeWidth="1.3" strokeDasharray="4,4" markerEnd="url(#afdReject)">
        <path d="M20,212 C-20,212 -20,100 70,100" />
        <path d="M360,312 C400,312 400,100 310,100" />
        <path d="M90,404 C-20,404 -20,76 100,76" />
      </g>

      {/* User Brief */}
      <g className="afd-node">
        <rect x="120" y="14" width="140" height="36" rx="18" fill="var(--surface)" stroke="var(--border)" />
        <text x="190" y="37" textAnchor="middle" className="mono" fontSize="11" fill="var(--ink)">User Brief</text>
      </g>

      {/* Script Writer Agent + its 4 output sub-nodes */}
      <g className="afd-writer-group">
        <g className="afd-node">
          <rect x="70" y="76" width="240" height="48" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="190" y="103" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">Script Writer Agent</text>
        </g>

        <g className="afd-subnode">
          <rect x="-9" y="128" width="95" height="30" rx="6" fill="var(--surface)" stroke="var(--border-soft)" />
          <text x="38.5" y="147" textAnchor="middle" className="mono" fontSize="6.5" fill="var(--ink-dim)">Story content</text>
        </g>
        <g className="afd-subnode">
          <rect x="92" y="128" width="95" height="30" rx="6" fill="var(--surface)" stroke="var(--border-soft)" />
          <text x="139.5" y="147" textAnchor="middle" className="mono" fontSize="6.5" fill="var(--ink-dim)">Dialogue</text>
        </g>
        <g className="afd-subnode">
          <rect x="193" y="128" width="95" height="30" rx="6" fill="var(--surface)" stroke="var(--border-soft)" />
          <text x="240.5" y="147" textAnchor="middle" className="mono" fontSize="6.5" fill="var(--ink-dim)">Scene prompt</text>
        </g>
        <g className="afd-subnode">
          <rect x="294" y="128" width="95" height="30" rx="6" fill="var(--surface)" stroke="var(--border-soft)" />
          <text x="341.5" y="147" textAnchor="middle" className="mono" fontSize="6.5" fill="var(--ink-dim)" textLength="86" lengthAdjust="spacingAndGlyphs">Character sketch prompt</text>
        </g>
      </g>

      {/* Script Reviewer Agent */}
      <g className="afd-node">
        <rect x="20" y="190" width="160" height="44" rx="8" fill="var(--surface)" stroke="var(--border)" />
        <text x="100" y="216" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)">Script Reviewer Agent</text>
      </g>

      {/* Image Gen & Training System — LoRA Creation */}
      <rect x="200" y="190" width="160" height="76" rx="10" fill="none" stroke="var(--hue-note)" strokeWidth="1.3" strokeDasharray="4,3" />
      <text x="280" y="203" textAnchor="middle" className="mono" fontSize="7.5" letterSpacing="0.04em" fill="var(--hue-note)">IMAGE GEN &amp;</text>
      <text x="280" y="213" textAnchor="middle" className="mono" fontSize="7.5" letterSpacing="0.04em" fill="var(--hue-note)">TRAINING SYSTEM</text>
      <g className="afd-node">
        <rect x="215" y="222" width="130" height="34" rx="6" fill="var(--surface)" stroke="var(--border)" />
        <text x="280" y="243" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)">LoRA Creation</text>
      </g>

      {/* Image Reviewer Agent */}
      <g className="afd-node">
        <rect x="200" y="292" width="160" height="40" rx="8" fill="var(--surface)" stroke="var(--border)" />
        <text x="280" y="316" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)">Image Reviewer Agent</text>
      </g>

      {/* Human Reviewer Team (gate) — no hover glow, its dashed accent border already marks it as the hard gate */}
      <g className="afd-gate-node">
        <rect x="90" y="380" width="200" height="48" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.6" strokeDasharray="5,3" />
        <text x="190" y="409" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">Human Reviewer Team</text>
      </g>

      {/* Image Gen & Training System — Scene Generation */}
      <rect x="110" y="454" width="160" height="76" rx="10" fill="none" stroke="var(--hue-note)" strokeWidth="1.3" strokeDasharray="4,3" />
      <text x="190" y="467" textAnchor="middle" className="mono" fontSize="7.5" letterSpacing="0.04em" fill="var(--hue-note)">IMAGE GEN &amp;</text>
      <text x="190" y="477" textAnchor="middle" className="mono" fontSize="7.5" letterSpacing="0.04em" fill="var(--hue-note)">TRAINING SYSTEM</text>
      <g className="afd-node">
        <rect x="125" y="486" width="130" height="34" rx="6" fill="var(--surface)" stroke="var(--border)" />
        <text x="190" y="507" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)">Scene Generation</text>
      </g>

      {/* Quality Supervisor Agent */}
      <g className="afd-node">
        <rect x="90" y="556" width="200" height="40" rx="8" fill="var(--surface)" stroke="var(--border)" />
        <text x="190" y="580" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)">Quality Supervisor Agent</text>
      </g>

      {/* Output */}
      <g className="afd-node">
        <rect x="130" y="622" width="120" height="36" rx="18" fill="var(--surface-2)" stroke="var(--border)" />
        <text x="190" y="645" textAnchor="middle" className="mono" fontSize="11" fill="var(--ink)">Output</text>
      </g>
    </svg>
  );
}
