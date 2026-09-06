import CaseNav from "../../components/CaseNav.jsx";
import CaseFoot from "../../components/CaseFoot.jsx";
import AgentFlow from "../../components/AgentFlow.jsx";
import DetectionDiagramLarge from "../../components/DetectionDiagramLarge.jsx";
import Seo from "../../components/Seo.jsx";

const STEPS = [
  {
    idx: "①",
    name: "Error-cause analysis",
    desc: "Grouped failures by root cause — genuinely ambiguous cases (needs more data), cases the model couldn't fit given VRAM limits, and cases exposing the pretrained backbone's weak domain fit.",
  },
  {
    idx: "②",
    name: "Training strategy & data allocation",
    desc: "Prioritized labeling and training budget toward the error groups that mattered most for the near-zero-FN requirement, rather than spreading effort evenly.",
  },
  {
    idx: "③",
    name: "Targeted image processing",
    desc: "Pre-processing tuned to make View/Note/Table boundaries easier for the model to separate, addressing the specific confusions the error analysis surfaced.",
  },
  {
    idx: "④",
    name: "Post-processing",
    desc: "A custom post-processing stage that catches near-miss detections before final output — the main lever for pushing false negatives down without a data or compute budget to match.",
  },
];

export default function Makinarocks() {
  return (
    <>
      <Seo
        title="Makinarocks — Detection Model for Engineering Drawings | Hoang Tan Duy"
        description="Teaching a detection model to read technical engineering drawings — hitting a client acceptance bar that treated a missed detection as far more costly than a false alarm."
      />
      <CaseNav label="MAKINAROCKS" />

      <header className="case-hero">
        <div className="wrap">
          <div className="case-kicker">CASE STUDY · 02 / 03</div>
          <h1 className="case-title">Makinarocks</h1>
          <p className="case-tagline">
            Teaching a detection model to read <strong>technical engineering drawings</strong> — and hitting a client
            acceptance bar that treated a missed detection as far more costly than a false alarm.
          </p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <div className="meta-label">Role</div>
              <div className="meta-value">AI Engineer</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Team</div>
              <div className="meta-value">25 members</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Domain</div>
              <div className="meta-value">Technical / engineering drawings</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Model</div>
              <div className="meta-value">RT-DETR, ResNet-101 backbone</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">01</span>The problem</h2>
            <div className="case-body">
              <p>
                The task: build a system that automatically detects and classifies elements on technical drawings
                into three types — <strong>View</strong>, <strong>Note</strong>, and <strong>Table</strong> — so
                downstream tooling can understand a drawing&apos;s layout without a human marking it up by hand.
              </p>
              <p>
                Two things made this genuinely hard. First, View, Note, and Table regions often <em>look</em> alike —
                dense text, thin lines, repeated symbols on a plain white background — so the model wasn&apos;t just
                missing objects, it was confusing one class for another. Second, the client&apos;s quality bar was
                strict on top of that: high mAP, and a <strong>near-zero false-negative rate</strong>. A missed
                detection was much more costly to them than a false alarm, which shaped every decision downstream.
              </p>
            </div>

            <div className="diagram-card" style={{ marginTop: 28 }}>
              <DetectionDiagramLarge />
            </div>
            <div className="diagram-caption">
              the three target classes — visually closer to each other than to anything RT-DETR had seen in
              pretraining
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">02</span>Domain gap: a real-world model, meeting a line drawing</h2>
            <div className="case-body">
              <p>
                RT-DETR-ResNet101 was pretrained on normal photos — people, cars, everyday objects. A technical
                drawing looks nothing like that: mostly thin black lines, small text, and repeated symbols on a plain
                white background. Just fine-tuning it a little on drawing data wasn&apos;t enough — it kept trying to
                apply what it learned from real-world photos, which doesn&apos;t fit line drawings well.
              </p>
              <p>
                More training data would genuinely have helped here — but the client could only provide a limited
                amount, and we had a limited GPU budget too, so scaling up to a much bigger model wasn&apos;t an
                option either. That left three constraints at once: not enough data, limited VRAM/compute, and a
                pretrained model that wasn&apos;t a great fit for the domain to begin with.
              </p>
            </div>

            <div className="compare-grid">
              <div className="compare-card">
                <h4>What the model already knew</h4>
                <p>Natural photos — continuous color, texture, lighting, real-world object shapes. Millions of pretraining examples, none of them a line drawing.</p>
              </div>
              <div className="compare-card">
                <h4>What it actually had to read</h4>
                <p>Sparse black-and-white geometry, dense repeated symbols, and three classes that differ mainly in context, not shape.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">03</span>The approach: work around the constraints, not against them</h2>
            <div className="case-body">
              <p>
                Instead of chasing &quot;more data, bigger model,&quot; the team looked closely at exactly which
                errors kept showing up, grouped them by cause, and fixed each group directly.
              </p>
            </div>

            <AgentFlow steps={STEPS} />

            <div className="stack-row">
              <span className="tag">Object Detection</span>
              <span className="tag">RT-DETR</span>
              <span className="tag">ResNet-101</span>
              <span className="tag">Domain Adaptation</span>
              <span className="tag">CVAT</span>
              <span className="tag">Error Analysis</span>
              <span className="tag">Post-processing</span>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">04</span>Result</h2>
            <div className="impact-list">
              <div className="impact-item">
                <div className="impact-mark">▸</div>
                <div className="impact-text">Shipped to the client&apos;s acceptance bar — high mAP with a near-zero false-negative rate on View/Note/Table detection.</div>
              </div>
              <div className="impact-item">
                <div className="impact-mark">▸</div>
                <div className="impact-text">Closer to classic computer-vision research than most of my generative-AI work: domain gap, data allocation under real constraints, and picking the metric that matched the actual business risk.</div>
              </div>
            </div>

            <div className="todo-note">
              <b>To fill in</b>
              Add the real mAP / false-negative numbers, the specific post-processing technique names, and any
              drawing samples you&apos;re allowed to share.
            </div>
          </div>
        </section>
      </main>

      <CaseFoot others={[{ label: "Flickrz", to: "/projects/flickrz" }, { label: "TryNectar", to: "/projects/trynectar" }]} />
    </>
  );
}
