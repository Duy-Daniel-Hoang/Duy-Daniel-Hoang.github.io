import AgentFlow from "../../components/AgentFlow.jsx";
import AgentFlowDiagram from "../../components/AgentFlowDiagram.jsx";
import CapabilityGrid from "../../components/CapabilityGrid.jsx";
import CaseFoot from "../../components/CaseFoot.jsx";
import CaseNav from "../../components/CaseNav.jsx";
import EqualizerWave from "../../components/EqualizerWave.jsx";
import Seo from "../../components/Seo.jsx";
import ShotsGrid from "../../components/ShotsGrid.jsx";
import { FLICKRZ_COPY } from "../../i18n/flickrzCopy.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import EnglishFlickrz from "./Flickrz.jsx";

const ICONS = ["⚙", "▦", "◆", "▣", "✎", "✦", "⚡", "☁", "⚑"];
const SHOT_FILES = ["pipeline.webp", "userbrief.webp", "script-writer.webp", "script-reviewer.webp", "lora-creation.webp", "image-reviewer.webp", "human-review.webp", "scene-generation.webp", "quality-supervisor.webp", "chapter-output.webp"];

function LocalizedContent({ c }) {
  const steps = c.steps.map(([name, tag, desc], index) => ({ idx: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"][index], name, tag, desc, gate: index === 5 }));
  const shots = c.shots.map(([name, desc], index) => ({ file: SHOT_FILES[index], alt: name, name, desc }));
  const stack = c.stack.map((title, index) => ({ icon: ICONS[index], title }));
  return <>
    <Seo title={c.seoTitle} description={c.seoDescription} /><CaseNav label="FLICKRZ" />
    <header className="case-hero"><div className="wrap">
      <div className="case-kicker">{c.kicker}</div><h1 className="case-title flickrz-wordmark"><img src="/assets/flickrz/logo-flickrz.svg" alt="Flickrz" /></h1>
      <p className="case-tagline">{c.taglineA}<strong>{c.taglineStrong1}</strong>{c.taglineB}<strong>{c.taglineStrong2}</strong>{c.taglineC}</p>
      <div className="case-meta-grid">
        {c.labels.slice(0, 3).map((label, index) => <div className="meta-item" key={label}><div className="meta-label">{label}</div><div className="meta-value">{c.values[index]}</div></div>)}
        <div className="meta-item"><div className="meta-label">{c.labels[3]}</div><div className="meta-value">{c.deployment} <a href="https://toomics.com/en/" target="_blank" rel="noopener noreferrer">toomics.com ↗</a></div></div>
      </div>
    </div><EqualizerWave /></header>
    <main>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">01</span>{c.problemTitle}</h2><div className="case-body">{c.problem.map((p) => <p key={p}>{p}</p>)}</div></div></section>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">02</span>{c.impactTitle}</h2><div className="impact-list">{c.impacts.map((impact) => <div className="impact-item" key={impact}><div className="impact-mark">▸</div><div className="impact-text">{impact}</div></div>)}</div></div></section>
      <section className="case-section"><div className="wrap-wide"><h2 className="case-h2"><span className="case-num">03</span>{c.pipelineTitle}</h2>{c.pipeline.map((p, index) => <div className="case-body" style={index ? { marginBottom: 8 } : undefined} key={p}><p>{p}</p></div>)}<div className="pipeline-split"><AgentFlow steps={steps} /><div className="pipeline-diagram-card"><AgentFlowDiagram /></div></div><CapabilityGrid items={stack} /></div></section>
      <section className="case-section"><div className="wrap-wide"><h2 className="case-h2"><span className="case-num">04</span>{c.sampleTitle}</h2><div className="case-body"><p>{c.sample}</p></div>
        <div className="demo-group"><div className="demo-group-label"><span className="age-badge age-badge--ok">{c.allAges}</span></div><div className="demo-video-frame demo-video-frame--full"><video src="/assets/flickrz/vid3.mp4" poster="/assets/flickrz/vid3-poster.webp" controls playsInline preload="metadata" /></div></div>
        <div className="demo-group"><div className="demo-group-label"><span className="age-badge">16+</span><span className="content-warning">{c.mature}</span></div><div className="demo-video-grid"><div className="demo-video-frame"><video src="/assets/flickrz/vid1.mp4" poster="/assets/flickrz/vid1-poster.webp" controls playsInline preload="metadata" /></div><div className="demo-video-frame"><video src="/assets/flickrz/vid2.mp4" poster="/assets/flickrz/vid2-poster.webp" controls playsInline preload="metadata" /></div></div></div>
      </div></section>
      <section className="case-section"><div className="wrap-wide"><h2 className="case-h2"><span className="case-num">05</span>{c.adminTitle}</h2><div className="case-body"><p>{c.admin}</p></div><ShotsGrid shots={shots} /></div></section>
    </main>
    <CaseFoot others={[{ label: "DrawMind", to: "/projects/drawmind" }, { label: "TryNectar", to: "/projects/trynectar" }]} />
  </>;
}

export default function LocalizedFlickrz() {
  const { locale } = useLocale();
  if (locale === "en") return <EnglishFlickrz />;
  return <LocalizedContent c={FLICKRZ_COPY[locale]} />;
}
