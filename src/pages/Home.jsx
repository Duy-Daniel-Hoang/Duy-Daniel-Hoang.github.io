import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import SkillBars from "../components/SkillBars.jsx";
import DetectionDiagramSmall from "../components/DetectionDiagramSmall.jsx";
import Seo from "../components/Seo.jsx";

const CORE_SKILLS = [
  ["Computer Vision", 7],
  ["Evaluation", 5],
  ["AI Image Generation", 4],
  ["LLM (Multimodal & Multilingual)", 4],
  ["Prompt Engineering", 4],
  ["AI Agent Orchestration", 3],
];
const TOOLS_SKILLS = [
  ["ComfyUI", 3],
  ["FastAPI", 3],
  ["RunPod / VastAI / AWS", 3],
  ["LangChain / LangGraph", 2],
];

export default function Home() {
  return (
    <>
      <Seo
        title="Hoang Tan Duy — AI / Computer Vision Engineer"
        description="AI / Computer Vision engineer portfolio — multi-agent AI pipelines, LoRA fine-tuning, and production ML systems. Projects, experience, and skills."
      />
      <nav>
        <div className="wrap-wide">
          <a className="nav-name" href="#top">
            HOANG TAN DUY<span>_</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div className="rise">
              <div className="eyebrow">AI / Computer Vision Engineer</div>
              <h1 className="hero-name">
                Hoang Tan Duy
                <em>Daniel — 7+ years, Computer Vision · Generative AI · LLM Agents</em>
              </h1>
              <p className="hero-thesis">
                I build AI systems that have to survive contact with production: a{" "}
                <strong>multi-agent generation pipeline</strong> serving a webtoon platform with 60M+ readers, and a{" "}
                <strong>detection model</strong> a client will only sign off on at a near-zero miss rate.
              </p>
              <div className="hero-meta">
                HANOI, VIETNAM &nbsp;·&nbsp; AI TEAM LEADER @ SOTATEK &nbsp;·&nbsp; OPEN TO NEW ROLES
              </div>
              <div className="hero-cta">
                <a className="btn primary" href="https://www.linkedin.com/in/duydaniel" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
                <a className="btn" href="#work">See the work</a>
                <a className="btn" href="#contact">Contact</a>
              </div>
            </div>

            <div className="rise-delay">
              <div className="diagram-card">
                <DetectionDiagramSmall />
              </div>
              <div className="diagram-caption">detection overlay, style of the Makinarocks pipeline</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">01 · About</div>
              <h2>Senior AI/ML engineer, generalist by necessity</h2>
            </div>
            <div className="about-body">
              <p>
                I design and ship end-to-end AI systems across computer vision, generative AI, and LLM-based agents —
                not research demos, production systems with real users and real acceptance criteria. That means
                owning the full path: translating a client&apos;s business requirement into technical architecture,
                preparing datasets and fine-tuning models (LoRA and beyond), and getting the result running reliably
                on AWS, VastAI, or RunPod.
              </p>
              <p>
                Most of the interesting problems I&apos;ve worked on sit at the boundary between &quot;the model can
                do this in principle&quot; and &quot;the client needs this to work every time&quot; — which usually
                means multi-agent orchestration with LangChain/LangGraph on the generative side, and confronting
                domain gap and strict false-negative bars on the detection side.
              </p>
              <p>
                I also lead: mentoring engineers and interns, running technical and model reviews, and translating
                between business stakeholders and the engineering team.
              </p>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">02 · Experience</div>
              <h2>Where I&apos;ve worked</h2>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-date">
                  APR 2024 —<br />PRESENT
                </div>
                <div>
                  <div className="tl-role">
                    AI Team Leader / AI Engineer <span>· SotaTek</span>
                  </div>
                  <p className="tl-desc">
                    Leading AI sub-teams across generative and computer-vision client projects — from technical
                    architecture and model strategy through to production deployment. Includes Flickrz, Makinarocks,
                    TryNectar, and Bloom.
                  </p>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-date">
                  FEB 2019 —<br />MAR 2024
                </div>
                <div>
                  <div className="tl-role">
                    AI Engineer <span>· Hung Ha Pay</span>
                  </div>
                  <p className="tl-desc">
                    Five years building and deploying early AI/ML systems — the foundation the later computer-vision
                    and generative-AI specialization was built on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap-wide">
            <div className="section-head">
              <div className="eyebrow">03 · Selected Work</div>
              <h2>Featured projects</h2>
              <p>
                Four production systems, reverse-chronological by how central they are to my current focus: agent
                orchestration and computer vision under real constraints. Flickrz, Makinarocks, and TryNectar open
                into a full case study.
              </p>
            </div>

            <div className="proj-grid">
              <Link className="proj-card-link" to="/projects/flickrz">
                <article className="proj-card bracket">
                  <div className="bk-tr" />
                  <div className="bk-bl" />
                  <div className="proj-top">
                    <div className="proj-title">Flickrz</div>
                    <div className="proj-role">AI LEADER</div>
                  </div>
                  <p className="proj-desc">
                    Webtoon AI image-generation platform for a Korean distributor with 60M+ users. Designed a{" "}
                    <strong>multi-agent pipeline</strong> — a Script Writer Agent, a Script Reviewer Agent, dedicated
                    agents for character and per-scene image prompts, and an Image Quality Supervisor Agent — with
                    two human-in-the-loop hard gates. LoRA fine-tuning keeps each character&apos;s identity consistent
                    across hundreds of panels.
                  </p>
                  <div className="proj-tags">
                    <span className="tag">Multi-Agent Orchestration</span>
                    <span className="tag">LangGraph</span>
                    <span className="tag">LoRA</span>
                    <span className="tag">ComfyUI</span>
                    <span className="tag">FastAPI</span>
                  </div>
                  <div className="case-link">
                    View case study <span className="arrow">→</span>
                  </div>
                </article>
              </Link>

              <Link className="proj-card-link" to="/projects/makinarocks">
                <article className="proj-card bracket">
                  <div className="bk-tr" />
                  <div className="bk-bl" />
                  <div className="proj-top">
                    <div className="proj-title">Makinarocks</div>
                    <div className="proj-role">AI ENGINEER</div>
                  </div>
                  <p className="proj-desc">
                    Detection and classification on technical engineering drawings — RT-DETR with a ResNet-101
                    backbone, adapted from natural-image pretraining to tell <strong>View, Note, and Table</strong>{" "}
                    elements apart despite heavy visual overlap between classes. The client&apos;s acceptance bar
                    demanded a near-zero false-negative rate, met through a combination of training strategy, data
                    allocation, and custom post-processing.
                  </p>
                  <div className="proj-tags">
                    <span className="tag">Object Detection</span>
                    <span className="tag">RT-DETR</span>
                    <span className="tag">Domain Adaptation</span>
                    <span className="tag">CVAT</span>
                  </div>
                  <div className="case-link">
                    View case study <span className="arrow">→</span>
                  </div>
                </article>
              </Link>

              <article className="proj-card bracket">
                <div className="bk-tr" />
                <div className="bk-bl" />
                <div className="proj-top">
                  <div className="proj-title">Bloom</div>
                  <div className="proj-role">AI ENGINEER</div>
                </div>
                <p className="proj-desc">
                  Production multi-agent LLM system for biological agriculture, giving farmers data-driven treatment
                  recommendations. LangGraph state machines route crop-lifecycle and environmental data through a RAG
                  pipeline built and validated with agronomists.
                </p>
                <div className="proj-tags">
                  <span className="tag">LangGraph</span>
                  <span className="tag">RAG</span>
                  <span className="tag">Multi-Agent</span>
                  <span className="tag">FastAPI</span>
                </div>
                <a className="proj-link" href="https://bloomtech.ag/" target="_blank" rel="noopener noreferrer">
                  bloomtech.ag ↗
                </a>
              </article>

              <Link className="proj-card-link" to="/projects/trynectar">
                <article className="proj-card bracket">
                  <div className="bk-tr" />
                  <div className="bk-bl" />
                  <div className="proj-top">
                    <div className="proj-title">TryNectar</div>
                    <div className="proj-role">AI ENGINEER</div>
                  </div>
                  <p className="proj-desc">
                    Live, profitable multimodal AI companion product — text, image, and video generation orchestrated
                    through ComfyUI and LangGraph. Solved latency and character-consistency problems at scale via
                    dynamic persona injection and context-window management.
                  </p>
                  <div className="proj-tags">
                    <span className="tag">Multimodal AI</span>
                    <span className="tag">ComfyUI</span>
                    <span className="tag">LangGraph</span>
                    <span className="tag">RunPod</span>
                  </div>
                  <div className="case-link">
                    View case study <span className="arrow">→</span>
                  </div>
                </article>
              </Link>
            </div>

            <div className="secondary-list">
              <div className="sec-item">
                <div className="sec-title">2D Drawing Generation</div>
                <div className="sec-desc">
                  CAD-intelligence system that learns 3D geometric representations and auto-generates structured 2D
                  engineering drawings — GNN-based feature recognition over CAD topology graphs, plus a Point Cloud
                  Transformer for shape embeddings. ~90%+ accuracy on major feature classes internally.
                </div>
              </div>
              <div className="sec-item">
                <div className="sec-title">RAG Legal Lookup</div>
                <div className="sec-desc">
                  Legal research assistant for traffic-safety law — full RAG pipeline with chunking strategy,
                  embeddings, metadata filtering, and LLM re-ranking for citation-grounded answers. Adopted into daily
                  legal-advisor workflows.
                </div>
              </div>
              <div className="sec-item">
                <div className="sec-title">Marketing Image Gen</div>
                <div className="sec-desc">
                  Internal on-premise Stable Diffusion tool that cut campaign visual turnaround from days to minutes,
                  integrated directly into the company CMS via FastAPI.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">04 · Skills</div>
              <h2>Where the years went</h2>
              <p>Years of hands-on experience per area, out of 7 — the length of my AI/ML career so far.</p>
            </div>

            <div className="skill-cols">
              <div>
                <div className="skill-col-label">Core AI / ML</div>
                <SkillBars items={CORE_SKILLS} max={7} />
              </div>
              <div>
                <div className="skill-col-label">Tools &amp; Infra</div>
                <SkillBars items={TOOLS_SKILLS} max={7} />
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="wrap">
            <div className="ed-grid">
              <div className="ed-block">
                <h3>Education</h3>
                <div className="ed-line">
                  <b>Hanoi University of Science and Technology</b> — Computer Science
                </div>
              </div>
              <div className="ed-block">
                <h3>Languages</h3>
                <div className="ed-line">
                  Vietnamese — <b>Native</b>
                </div>
                <div className="ed-line">
                  English — <b>Fluent</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <div className="eyebrow">05 · Contact</div>
            <h2 style={{ marginTop: 14 }}>Let&apos;s talk.</h2>
            <p style={{ marginTop: 14, color: "var(--ink-dim)", maxWidth: "52ch", fontSize: 16 }}>
              Open to new roles in computer vision and applied AI. The fastest way to reach me is LinkedIn.
            </p>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">
                  <a href="https://www.linkedin.com/in/duydaniel" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/duydaniel ↗
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-label">Location</div>
                <div className="contact-value">Hanoi, Vietnam</div>
              </div>
              <div className="contact-item">
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href="mailto:hoangtanduynx@gmail.com">hoangtanduynx@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-label">Phone</div>
                <div className="contact-value placeholder">add your phone here (optional)</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
