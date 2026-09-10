import CaseNav from "../../components/CaseNav.jsx";
import CaseFoot from "../../components/CaseFoot.jsx";
import Seo from "../../components/Seo.jsx";

export default function TryNectar() {
  return (
    <>
      <Seo
        title="TryNectar — Multimodal AI Companion | Hoang Tan Duy"
        description="A live, profitable multimodal AI companion product — and the engineering problem of keeping a character feeling like the same character across text, image, and video."
      />
      <CaseNav label="TRYNECTAR" />

      <header className="case-hero">
        <div className="wrap">
          <div className="case-kicker">CASE STUDY · 03 / 03</div>
          <h1 className="case-title trynectar-wordmark"><img src="/assets/trynectar/trynectar-logo.png" alt="TryNectar" /></h1>
          <p className="case-tagline">
            A <strong>live, profitable</strong> multimodal AI companion product — and the engineering problem of
            keeping a character feeling like the same character across text, image, and video.
          </p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <div className="meta-label">Role</div>
              <div className="meta-value">AI Engineer / AI Solutions Provider</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Team</div>
              <div className="meta-value">20 members</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Status</div>
              <div className="meta-value">Live &amp; profitable</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Live at</div>
              <div className="meta-value">
                <a href="https://trynectar.ai/" target="_blank" rel="noopener noreferrer">trynectar.ai ↗</a>
              </div>
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
                TryNectar provides companion, emotional-connection, and empathy experiences to general users and to
                AI content creators, across text, image, and video. Users expect a fast, coherent experience — but
                multimodal generation pipelines are naturally slow and naturally inconsistent: the same companion can
                drift in appearance or tone from one generation to the next, and every added modality adds latency.
              </p>
              <p>The brief was to fix both at once, at production scale, without users noticing the machinery underneath.</p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">02</span>Approach</h2>
            <div className="case-body">
              <p>
                I redesigned the generation pipeline around <strong>ComfyUI</strong> for the image/video side and{" "}
                <strong>LangGraph</strong> for orchestration, then went after latency and consistency as two separate
                problems:
              </p>
            </div>

            <div className="compare-grid">
              <div className="compare-card">
                <h4>Latency</h4>
                <p>Optimized model inference on RunPod and restructured the pipeline so modalities that don&apos;t depend on each other run without waiting in line.</p>
              </div>
              <div className="compare-card">
                <h4>Character consistency</h4>
                <p>Dynamic persona injection and context-window management, so the companion&apos;s identity and tone hold steady across a long conversation and multiple generated assets.</p>
              </div>
            </div>

            <div className="case-body" style={{ marginTop: 24 }}>
              <p>
                I also drove the system integration across services — model inference, content moderation, storage,
                and personalization — into one platform architecture, and led/mentored the AI R&amp;D team on
                engineering standards for the pipeline codebase.
              </p>
            </div>

            <div className="stack-row">
              <span className="tag">Multimodal AI</span>
              <span className="tag">ComfyUI</span>
              <span className="tag">LangGraph</span>
              <span className="tag">Prompt Engineering</span>
              <span className="tag">RunPod</span>
              <span className="tag">System Integration</span>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">03</span>Result</h2>
            <div className="impact-list">
              <div className="impact-item">
                <div className="impact-mark">▸</div>
                <div className="impact-text">Latency dropped significantly across the multimodal pipeline while character consistency stayed stable.</div>
              </div>
              <div className="impact-item">
                <div className="impact-mark">▸</div>
                <div className="impact-text">The product is live today and profitable.</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CaseFoot others={[{ label: "Flickrz", to: "/projects/flickrz" }, { label: "DrawMind", to: "/projects/drawmind" }]} />
    </>
  );
}
