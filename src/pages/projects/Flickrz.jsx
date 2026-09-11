import CaseNav from "../../components/CaseNav.jsx";
import CaseFoot from "../../components/CaseFoot.jsx";
import AgentFlow from "../../components/AgentFlow.jsx";
import AgentFlowDiagram from "../../components/AgentFlowDiagram.jsx";
import ShotsGrid from "../../components/ShotsGrid.jsx";
import EqualizerWave from "../../components/EqualizerWave.jsx";
import CapabilityGrid from "../../components/CapabilityGrid.jsx";
import Seo from "../../components/Seo.jsx";

const STACK = [
  { icon: "⚙", title: "Multi-Agent Orchestration" },
  { icon: "▦", title: "LangGraph" },
  { icon: "◆", title: "LoRA fine-tuning" },
  { icon: "▣", title: "ComfyUI" },
  { icon: "✎", title: "Qwen Image Edit" },
  { icon: "✦", title: "FLUX / SDXL / QWEN" },
  { icon: "⚡", title: "FastAPI" },
  { icon: "☁", title: "RunPod" },
  { icon: "⚑", title: "Human-in-the-loop" },
];

const STEPS = [
  {
    idx: "①",
    name: "User Brief",
    tag: "input from client",
    desc: "Genre, target length, and key story beats come in as the seed for a chapter.",
  },
  {
    idx: "②",
    name: "Script Writer Agent",
    tag: "Reason → Act → Observe",
    desc: (
      <>
        Pulls context from three tiers of memory — semantic (character bibles, world, art style, LoRA registry),
        episodic (chapter history, reviewer feedback), procedural (writing templates, prompt recipes) — and writes{" "}
        <em>four</em> outputs in one pass: story content, dialogue, a character-sketch prompt (for any character with
        no LoRA yet), and a scene prompt for rendering.
      </>
    ),
  },
  {
    idx: "③",
    name: "Script Reviewer Agent",
    tag: "rubric-scored · script lane",
    desc: "Scores the story + dialogue + scene prompts together against Hook, Plot, Conflict, Pacing, and Character Consistency. Below-threshold drafts go straight back to the Writer Agent with feedback.",
  },
  {
    idx: "④",
    name: "LoRA Creation",
    tag: "Image Generation & Training System · character lane",
    desc: "In parallel, the character-sketch prompt enters the Image Generation & Training System — a shared subsystem this screen shares with Scene Generation later. It generates reference sketches via Qwen Image Edit through a custom ComfyUI workflow, then trains the LoRA, for any character that doesn't have one yet.",
  },
  {
    idx: "⑤",
    name: "Image Reviewer Agent",
    tag: "character lane",
    desc: "Automated pass/flag on the generated sketches before anything reaches a human — the character-lane counterpart to the Script Reviewer Agent. A flagged batch sends the character branch back to the Script Writer Agent to revise the sketch prompt, same as a failed script review.",
  },
  {
    idx: "⑥",
    name: "Human Reviewer Team",
    tag: "hard gate — both lanes merge here",
    gate: true,
    desc: "Not optional — the reviewed script and the reviewed character sketches are approved together. Reject sends both back to the Script Writer Agent; nothing renders until this passes.",
  },
  {
    idx: "⑦",
    name: "Scene Generation",
    tag: "Image Generation & Training System · second entry point",
    desc: "The pipeline's second pass through the Image Generation & Training System — same subsystem as LoRA Creation, this time using ComfyUI with FLUX, SDXL, or QWEN. The trained LoRA, the scene prompts, and the dialogue combine here to render every panel.",
  },
  {
    idx: "⑧",
    name: "Quality Supervisor Agent",
    desc: "Checks generated panels for quality and consistency; feedback loops back into episodic memory so later runs don't repeat the same mistakes.",
  },
  {
    idx: "⑨",
    name: "Output",
    desc: "Joined panels ship as the finished chapter. The full run is observed by an LLMOps layer — turn-level tracing, a token/cost ledger, deterministic + LLM-judge eval suites, and a release gate for any prompt or model change.",
  },
];

const SHOTS = [
  { file: "pipeline.webp", alt: "Pipeline run view", name: "Pipeline", desc: "Live run view — script and character lanes, two merge points, two fail-loops back to the writer." },
  { file: "userbrief.webp", alt: "User brief form", name: "User Brief", desc: "Where a chapter starts — genre, beats, characters." },
  { file: "script-writer.webp", alt: "Script Writer Agent screen", name: "Script Writer Agent", desc: "One agent, four outputs: story, dialogue, a character sketch prompt, a scene prompt." },
  { file: "script-reviewer.webp", alt: "Script Reviewer Agent screen", name: "Script Reviewer Agent", desc: "Rubric score on story + dialogue + scene prompts; fails loop back to the writer." },
  { file: "lora-creation.webp", alt: "Character LoRA Creation screen", name: "LoRA Creation (6.1)", desc: "Generates character sketches from the sketch prompt and trains the LoRA." },
  { file: "image-reviewer.webp", alt: "Image Reviewer Agent screen", name: "Image Reviewer Agent", desc: "Automated pass/flag on the generated sketches before a human sees them." },
  { file: "human-review.webp", alt: "Human Reviewer Team screen", name: "Human Reviewer Team", desc: "The hard gate — script and character sketches approved together, or both sent back." },
  { file: "scene-generation.webp", alt: "Scene generation screen", name: "Scene Generation (6.2)", desc: "Renders panels from the trained LoRA, scene prompts, and dialogue." },
  { file: "quality-supervisor.webp", alt: "Quality Supervisor Agent screen", name: "Quality Supervisor Agent", desc: "Pass/flag per panel, drift caught before output." },
  { file: "chapter-output.webp", alt: "Chapter output screen", name: "Output", desc: "Finished chapter, ready to publish or export." },
];

export default function Flickrz() {
  return (
    <>
      <Seo
        title="Flickrz — AI Webtoon Pipeline | Hoang Tan Duy"
        description="A multi-agent AI pipeline that writes, illustrates, and quality-checks Korean webtoon comics for a distribution platform with 60M+ readers, with human reviewers holding two hard gates."
      />
      <CaseNav label="FLICKRZ" />

      <header className="case-hero">
        <div className="wrap">
          <div className="case-kicker">CASE STUDY · 01 / 03</div>
          <h1 className="case-title flickrz-wordmark">
            <img src="/assets/flickrz/logo-flickrz.svg" alt="Flickrz" />
          </h1>
          <p className="case-tagline">
            A <strong>multi-agent AI pipeline</strong> that writes, illustrates, and quality-checks Korean webtoon
            comics — built for a distribution platform with <strong>60M+ readers</strong>, with human reviewers
            holding two hard gates over the whole process.
          </p>

          <div className="case-meta-grid">
            <div className="meta-item">
              <div className="meta-label">Role</div>
              <div className="meta-value">AI Leader</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Team</div>
              <div className="meta-value">20 members</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Client</div>
              <div className="meta-value">Korean webtoon distributor, 60M+ users</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Deployment</div>
              <div className="meta-value">
                Internal tool — publishes finished chapters to{" "}
                <a href="https://toomics.com/en/" target="_blank" rel="noopener noreferrer">toomics.com ↗</a>
              </div>
            </div>
          </div>
        </div>
        <EqualizerWave />
      </header>

      <main>
        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">01</span>The problem</h2>
            <div className="case-body">
              <p>
                Before this platform, producing a single webtoon series meant hiring a full production team —
                writers, artists, editors — and it typically took close to a year per series. The client wanted an AI
                system that could compress that into a few months without losing what makes a webtoon readable: a
                compelling script and characters who look like <em>themselves</em> across hundreds of panels.
              </p>
              <p>
                That second part is the hard one. Generative image models are naturally inconsistent from one
                generation to the next — the same character prompt can drift in face, outfit, or proportions panel to
                panel. Any system built for this had to solve character identity as a first-class problem, not an
                afterthought.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <h2 className="case-h2"><span className="case-num">02</span>Project impact &amp; outcomes</h2>
            <div className="impact-list">
              <div className="impact-item">
                <div className="impact-mark">▸</div>
                <div className="impact-text">Comic production time dropped from close to a year to a few months per series.</div>
              </div>
              <div className="impact-item">
                <div className="impact-mark">▸</div>
                <div className="impact-text">The platform secured multiple funding rounds and became a core product in the client&apos;s comic creation workflow.</div>
              </div>
              <div className="impact-item">
                <div className="impact-mark">▸</div>
                <div className="impact-text">Character identity stays consistent across hundreds of panels per chapter — the hardest part of production-grade generative AI for sequential art.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap-wide">
            <h2 className="case-h2"><span className="case-num">03</span>A multi-agent pipeline, not one big agent</h2>
            <div className="case-body">
              <p>
                The system is split across several specialized agents, each responsible for one part of the pipeline,
                with a human reviewer team sitting in the loop as a hard gate before anything expensive happens.
              </p>
            </div>
            <div className="case-body" style={{ marginBottom: 8 }}>
              <p>
                The script side and the character-art side run as two lanes that fork after the Writer Agent and
                merge twice — once at the Human Reviewer Team gate, once inside the Image Generation &amp; Training
                System at final rendering. Three separate revise loops (script, sketches, or a human reject) all send
                work back to the same place: the Script Writer Agent.
              </p>
            </div>

            <div className="pipeline-split">
              <AgentFlow steps={STEPS} />
              <div className="pipeline-diagram-card">
                <AgentFlowDiagram />
              </div>
            </div>

            <CapabilityGrid items={STACK} />
          </div>
        </section>

        <section className="case-section">
          <div className="wrap-wide">
            <h2 className="case-h2"><span className="case-num">04</span>Sample output</h2>
            <div className="case-body">
              <p>
                Three finished chapters, rendered end to end by the pipeline — script, character art, and panel
                generation all produced by the system above.
              </p>
            </div>

            <div className="demo-group">
              <div className="demo-group-label">
                <span className="age-badge age-badge--ok">All ages</span>
              </div>
              <div className="demo-video-frame demo-video-frame--full">
                <video
                  src="/assets/flickrz/vid3.mp4"
                  poster="/assets/flickrz/vid3-poster.webp"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>

            <div className="demo-group">
              <div className="demo-group-label">
                <span className="age-badge">16+</span>
                <span className="content-warning">Mature content</span>
              </div>
              <div className="demo-video-grid">
                <div className="demo-video-frame">
                  <video
                    src="/assets/flickrz/vid1.mp4"
                    poster="/assets/flickrz/vid1-poster.webp"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div className="demo-video-frame">
                  <video
                    src="/assets/flickrz/vid2.mp4"
                    poster="/assets/flickrz/vid2-poster.webp"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap-wide">
            <h2 className="case-h2"><span className="case-num">05</span>Inside the AI Webtoon admin</h2>
            <div className="case-body">
              <p>
                The pipeline isn&apos;t just an API — the team operates it through an internal admin tool: a run view
                of the pipeline itself, plus a dedicated screen per agent for the parts that need human eyes
                (reviewing scripts, generating and QA-ing character sketches, training LoRAs, checking generated
                panels).
              </p>
            </div>

            <ShotsGrid shots={SHOTS} />
          </div>
        </section>
      </main>

      <CaseFoot others={[{ label: "DrawMind", to: "/projects/drawmind" }, { label: "TryNectar", to: "/projects/trynectar" }]} />
    </>
  );
}
