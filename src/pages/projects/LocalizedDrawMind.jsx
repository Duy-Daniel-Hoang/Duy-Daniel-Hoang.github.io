import { useEffect, useRef } from "react";
import AgentFlow from "../../components/AgentFlow.jsx";
import CaseFoot from "../../components/CaseFoot.jsx";
import MapComparisonChart from "../../components/MapComparisonChart.jsx";
import CaseNav from "../../components/CaseNav.jsx";
import Seo from "../../components/Seo.jsx";
import { DRAWMIND_COPY } from "../../i18n/drawmindCopy.js";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import EnglishDrawMind from "./DrawMind.jsx";

function useAutoplayInView() {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    video.muted = true;
    video.defaultMuted = true;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.35 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function LocalizedContent({ c }) {
  const detectionRef = useAutoplayInView();
  const agentRef = useAutoplayInView();
  const steps = c.steps.map(([name, desc], index) => ({ idx: ["①", "②", "③", "④"][index], name, desc }));
  return <>
    <Seo title={c.seoTitle} description={c.seoDescription} /><CaseNav label="DRAWMIND" />
    <header className="case-hero"><div className="wrap">
      <div className="case-kicker">{c.kicker}</div><h1 className="case-title"><img className="case-logo" src="/assets/drawmind/drawmind-logo.png" alt="DrawMind" /></h1>
      <p className="case-tagline">{c.taglineA}<strong>{c.taglineStrong}</strong>{c.taglineB}</p>
      <div className="case-meta-grid">
        <div className="meta-item"><div className="meta-label">{c.labels[0]}</div><div className="meta-value">{c.values[0]}</div></div>
        <div className="meta-item"><div className="meta-label">{c.labels[1]}</div><div className="meta-value">{c.values[1]}</div></div>
        <div className="meta-item"><div className="meta-label">{c.labels[2]}</div><div className="meta-value"><a href="https://www.makinarocks.ai/en/" target="_blank" rel="noopener noreferrer">Makinarocks ↗</a></div></div>
        <div className="meta-item"><div className="meta-label">{c.labels[3]}</div><div className="meta-value">{c.values[2]}</div></div>
        <div className="meta-item"><div className="meta-label">{c.labels[4]}</div><div className="meta-value">{c.values[3]}</div></div>
      </div>
    </div></header>
    <div className="wrap" style={{ marginTop: 40 }}><div className="hero-image-wrap"><img className="hero-image" src="/assets/drawmind/drawmind-thumbnail.webp" alt="DrawMind" /></div></div>
    <main>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">01</span>{c.problemTitle}</h2><div className="case-body">{c.problem.map((p) => <p key={p}>{p}</p>)}</div><div className="case-video-frame" style={{ marginTop: 28 }}><img className="case-video" src="/assets/drawmind/problem.webp" alt="Technical engineering drawing" /></div></div></section>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">02</span>{c.domainTitle}</h2><div className="case-body">{c.domain.map((p) => <p key={p}>{p}</p>)}</div><div className="compare-grid">
        <div className="compare-card"><img className="compare-card-img" src="/assets/drawmind/actually-already-knew.webp" alt="Natural-image pretraining data" /><h4>{c.knownTitle}</h4><p>{c.knownDesc}</p></div>
        <div className="compare-card"><img className="compare-card-img" src="/assets/drawmind/actually-had-to-read.webp" alt="Technical drawings" /><h4>{c.readTitle}</h4><p>{c.readDesc}</p></div>
      </div></div></section>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">03</span>{c.approachTitle}</h2><div className="case-body"><p>{c.approach}</p></div><AgentFlow steps={steps} /><div className="stack-row">{["Object Detection", "RT-DETR", "ResNet-101", "Domain Adaptation", "CVAT", "Error Analysis", "Post-processing"].map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></section>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">04</span>{c.systemTitle}</h2><div className="case-body"><p>{c.detect}</p></div><div className="case-video-frame" style={{ marginTop: 20 }}><video ref={detectionRef} className="case-video" src="/assets/drawmind/det-seg-vid.mp4" poster="/assets/drawmind/det-seg-poster.webp" loop muted playsInline preload="metadata" /></div><div className="diagram-caption">{c.detectCaption}</div>
        <div className="case-body" style={{ marginTop: 40 }}><p>{c.agent}</p></div><div className="case-video-frame" style={{ marginTop: 20 }}><video ref={agentRef} className="case-video" src="/assets/drawmind/aigent-understands-drawings.mp4" poster="/assets/drawmind/aigent-understands-drawings-poster.webp" loop muted playsInline preload="metadata" /></div><div className="diagram-caption">{c.agentCaption}</div>
      </div></section>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">05</span>{c.impactTitle}</h2><div className="impact-list">{c.impacts.map((impact, index) => <div className="impact-entry" key={impact}><div className="impact-item"><div className="impact-mark">▸</div><div className="impact-text">{impact}</div></div>{index === 1 && <MapComparisonChart />}</div>)}</div></div></section>
    </main>
    <CaseFoot others={[{ label: "Flickrz", to: "/projects/flickrz" }, { label: "TryNectar", to: "/projects/trynectar" }]} />
  </>;
}

export default function LocalizedDrawMind() {
  const { locale } = useLocale();
  if (locale === "en") return <EnglishDrawMind />;
  return <LocalizedContent c={DRAWMIND_COPY[locale]} />;
}
