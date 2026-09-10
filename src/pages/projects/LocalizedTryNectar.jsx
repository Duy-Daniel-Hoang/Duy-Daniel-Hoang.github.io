import CaseFoot from "../../components/CaseFoot.jsx";
import CaseNav from "../../components/CaseNav.jsx";
import Seo from "../../components/Seo.jsx";
import { useLocale } from "../../i18n/LocaleContext.jsx";
import { TRYNECTAR_COPY } from "../../i18n/trynectarCopy.js";

export default function LocalizedTryNectar() {
  const { locale } = useLocale();
  const c = TRYNECTAR_COPY[locale] ?? TRYNECTAR_COPY.en;
  return <>
    <Seo title={c.seoTitle} description={c.seoDescription} />
    <CaseNav label="TRYNECTAR" />
    <header className="case-hero"><div className="wrap">
      <div className="case-kicker">{c.kicker}</div><h1 className="case-title">TryNectar</h1>
      <p className="case-tagline">{c.taglineA}<strong>{c.taglineStrong}</strong>{c.taglineB}</p>
      <div className="case-meta-grid">
        {c.labels.slice(0, 3).map((label, i) => <div className="meta-item" key={label}><div className="meta-label">{label}</div><div className="meta-value">{c.values[i]}</div></div>)}
        <div className="meta-item"><div className="meta-label">{c.labels[3]}</div><div className="meta-value"><a href="https://trynectar.ai/" target="_blank" rel="noopener noreferrer">trynectar.ai ↗</a></div></div>
      </div>
    </div></header>
    <main>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">01</span>{c.problemTitle}</h2><div className="case-body">{c.problem.map((p) => <p key={p}>{p}</p>)}</div></div></section>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">02</span>{c.approachTitle}</h2>
        <div className="case-body"><p>{c.approachA}<strong>ComfyUI</strong>{c.approachB}<strong>LangGraph</strong>{c.approachC}</p></div>
        <div className="compare-grid"><div className="compare-card"><h4>{c.latency}</h4><p>{c.latencyDesc}</p></div><div className="compare-card"><h4>{c.consistency}</h4><p>{c.consistencyDesc}</p></div></div>
        <div className="case-body" style={{ marginTop: 24 }}><p>{c.integration}</p></div>
        <div className="stack-row">{["Multimodal AI", "ComfyUI", "LangGraph", "Prompt Engineering", "RunPod", "System Integration"].map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </div></section>
      <section className="case-section"><div className="wrap"><h2 className="case-h2"><span className="case-num">03</span>{c.resultTitle}</h2><div className="impact-list">{c.impacts.map((impact) => <div className="impact-item" key={impact}><div className="impact-mark">▸</div><div className="impact-text">{impact}</div></div>)}</div></div></section>
    </main>
    <CaseFoot others={[{ label: "Flickrz", to: "/projects/flickrz" }, { label: "DrawMind", to: "/projects/drawmind" }]} />
  </>;
}
