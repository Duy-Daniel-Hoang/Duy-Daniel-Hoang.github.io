import { Link } from "react-router-dom";
import EnglishHome from "./Home.jsx";
import Footer from "../components/Footer.jsx";
import HeroPipeline from "../components/HeroPipeline.jsx";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import Seo from "../components/Seo.jsx";
import SkillMarquees from "../components/SkillMarquees.jsx";
import { useLocale } from "../i18n/LocaleContext.jsx";
import { HOME_COPY } from "../i18n/homeCopy.js";
import { HOME_CJK } from "../i18n/homeCopyCjk.js";

const NAV_IDS = ["about", "experience", "work", "skills", "contact"];
const PROJECTS = [
  { name: "Flickrz", to: "/projects/flickrz", theme: "orange", tags: ["Multi-Agent Orchestration", "LangGraph", "LoRA", "ComfyUI", "FastAPI"], logo: "/assets/flickrz/logo-flickrz.svg", logoClass: "flickrz" },
  { name: "DrawMind", to: "/projects/drawmind", theme: "green", tags: ["Object Detection", "RT-DETR", "Domain Adaptation", "CVAT"], logo: "/assets/drawmind/drawmind-logo.png", logoClass: "drawmind" },
  { name: "Bloom", theme: "blue", tags: ["LangGraph", "RAG", "Multi-Agent", "FastAPI"] },
  { name: "TryNectar", to: "/projects/trynectar", theme: "redorange", tags: ["Multimodal AI", "ComfyUI", "LangGraph", "RunPod"], logo: "/assets/trynectar/trynectar-logo.png", logoClass: "trynectar" },
];

function ProjectCard({ project, copy, role }) {
  const card = (
    <article className={`proj-card bracket proj-card--${project.theme}`}>
      <div className="bk-tr" /><div className="bk-bl" />
      <div className="proj-top">
        {project.logo ? (
          <div className="proj-title proj-title--logo"><img className={`proj-logo proj-logo--${project.logoClass}`} src={project.logo} alt={project.name} /></div>
        ) : <div className="proj-title">{project.name}</div>}
        <div className="proj-role">{role}</div>
      </div>
      <p className="proj-desc">{copy.descA}{copy.strong && <strong>{copy.strong}</strong>}{copy.descB}</p>
      <div className="proj-tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="case-link">{copy.link} <span className="arrow">→</span></div>
    </article>
  );
  return project.to ? <Link className="proj-card-link" to={project.to}>{card}</Link> : card;
}

export default function LocalizedHome() {
  const { locale } = useLocale();
  if (locale === "en") return <EnglishHome />;
  const copy = HOME_CJK[locale] ?? HOME_COPY[locale] ?? HOME_COPY.en;

  return (
    <>
      <Seo title={copy.seoTitle} description={copy.seoDescription} />
      <nav><div className="wrap-wide">
        <a className="nav-name" href="#top"><span>{copy.name.toLocaleUpperCase(locale)}</span><span>_</span></a>
        <ul className="nav-links">{copy.nav.map((label, index) => <li key={NAV_IDS[index]}><a href={`#${NAV_IDS[index]}`}>{label}</a></li>)}</ul>
        <LanguageSwitcher />
      </div></nav>

      <header className="hero" id="top"><div className="wrap"><div className="hero-grid">
        <div className="rise">
          <div className="eyebrow">{copy.eyebrow}</div>
          <h1 className="hero-name">{copy.name}<em>{copy.subtitle}</em></h1>
          <ul className="hero-thesis">{copy.thesis.map(([lead, rest], index) => <li key={lead}><strong className={`hl ${["hl-orange", "hl-green", "hl-blue", "hl-pink"][index]}`}>{lead}</strong>{rest}</li>)}</ul>
          <div className="hero-meta">{copy.meta}</div>
          <div className="hero-cta">
            <a className="btn linkedin" href="https://www.linkedin.com/in/duydaniel" target="_blank" rel="noopener noreferrer">{copy.linkedin}</a>
            <a className="btn" href="#work">{copy.seeWork}</a><a className="btn" href="#contact">{copy.contact}</a>
          </div>
        </div>
        <div className="rise-delay"><HeroPipeline /></div>
      </div></div></header>

      <main>
        <section id="about"><div className="wrap">
          <div className="section-head"><div className="eyebrow">{copy.aboutLabel}</div><h2>{copy.aboutTitle}</h2></div>
          <div className="about-body">{copy.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div></section>

        <section id="experience"><div className="wrap">
          <div className="section-head"><div className="eyebrow">{copy.experienceLabel}</div><h2>{copy.experienceTitle}</h2></div>
          <div className="timeline">{copy.jobs.map((job) => <div className="tl-item" key={job.company}>
            <div className="tl-date">{job.date}</div><div><div className="tl-role">{job.role} <span>· {job.company === "SotaTek" ? <a href="https://www.sotatek.com/" target="_blank" rel="noopener noreferrer">{job.company}</a> : job.company}</span></div><p className="tl-desc">{job.desc}</p></div>
          </div>)}</div>
        </div></section>

        <section id="work"><div className="wrap-wide">
          <div className="section-head"><div className="eyebrow">{copy.workLabel}</div><h2>{copy.workTitle}</h2><p>{copy.workIntro}</p></div>
          <div className="proj-grid">{PROJECTS.map((project, index) => <ProjectCard project={project} copy={copy.projects[index]} role={copy.projectRoles[index]} key={project.name} />)}</div>
          <div className="secondary-list">{copy.secondary.map(([title, desc]) => <div className="sec-item" key={title}><div className="sec-title">{title}</div><div className="sec-desc">{desc}</div></div>)}</div>
        </div></section>

        <section id="skills"><div className="wrap">
          <div className="section-head"><div className="eyebrow">{copy.skillsLabel}</div><h2>{copy.skillsTitle}</h2><p>{copy.skillsDesc}</p></div>
          <SkillMarquees labels={{ core: copy.core, tools: copy.tools, leadership: copy.leadership }} />
        </div></section>

        <section id="education"><div className="wrap"><div className="ed-grid">
          <div className="ed-block"><h3>{copy.education}</h3><div className="ed-line"><b>{copy.university}</b> — {copy.major}</div></div>
          <div className="ed-block"><h3>{copy.languages}</h3><div className="ed-line">{copy.native}</div><div className="ed-line">{copy.fluent}</div></div>
        </div></div></section>

        <section id="contact" className="contact"><div className="wrap">
          <div className="eyebrow">{copy.contactLabel}</div><h2 style={{ marginTop: 14 }}>{copy.contactTitle}</h2>
          <p style={{ marginTop: 14, color: "var(--ink-dim)", maxWidth: "52ch", fontSize: 16 }}>{copy.contactDesc}</p>
          <div className="contact-grid"><div className="contact-item"><div className="contact-label">LinkedIn</div><div className="contact-value"><a href="https://www.linkedin.com/in/duydaniel" target="_blank" rel="noopener noreferrer">linkedin.com/in/duydaniel ↗</a></div></div><div className="contact-item"><div className="contact-label">{copy.locationLabel}</div><div className="contact-value">{copy.location}</div></div><div className="contact-item"><div className="contact-label">Email</div><div className="contact-value"><a href={`mailto:${copy.email}`}>{copy.email}</a></div></div></div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
