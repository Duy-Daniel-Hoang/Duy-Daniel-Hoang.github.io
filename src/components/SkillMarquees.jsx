import { useLocale } from "../i18n/LocaleContext.jsx";

const CORE = [
  "Computer Vision", "Object Detection", "Segmentation", "Multimodal LLM / VLM",
  "Generative AI", "LLM Agents", "RAG", "Model Evaluation", "LoRA Fine-tuning", "Prompt Engineering",
];

const TOOLS = [
  "Python", "PyTorch", "LangGraph", "ComfyUI", "FastAPI", "CVAT",
  "AWS", "RunPod", "VastAI", "Docker", "LLMOps",
];

const LEADERSHIP = {
  en: ["Clear direction", "High ownership", "Technical strategy", "Team mentoring", "Stakeholder alignment", "Model review", "Delivery accountability", "Cross-functional leadership"],
  vi: ["Chỉ dẫn rõ ràng", "Tinh thần làm chủ cao", "Chiến lược kỹ thuật", "Dẫn dắt & mentoring", "Đồng thuận stakeholder", "Review mô hình", "Cam kết delivery", "Phối hợp liên chức năng"],
  ja: ["明確な方向性", "高いオーナーシップ", "技術戦略", "チーム育成", "関係者との合意形成", "モデルレビュー", "デリバリー責任", "部門横断リーダーシップ"],
  ko: ["명확한 방향 제시", "높은 오너십", "기술 전략", "팀 멘토링", "이해관계자 조율", "모델 리뷰", "딜리버리 책임", "크로스펑셔널 리더십"],
};

function MarqueeRow({ items, reverse = false, duration = 28 }) {
  return (
    <div className="skill-marquee" tabIndex="0">
      <div className={`skill-marquee-track${reverse ? " is-reverse" : ""}`} style={{ "--marquee-duration": `${duration}s` }}>
        {[false, true].map((duplicate) => (
          <div className="skill-marquee-set" aria-hidden={duplicate || undefined} key={String(duplicate)}>
            {items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillMarquees({ labels }) {
  const { locale } = useLocale();
  const groups = [
    { label: labels.core, items: CORE, duration: 34 },
    { label: labels.tools, items: TOOLS, duration: 30, reverse: true },
    { label: labels.leadership, items: LEADERSHIP[locale] ?? LEADERSHIP.en, duration: 32 },
  ];

  return (
    <div className="skill-marquee-groups">
      {groups.map((group) => (
        <div className="skill-marquee-group" key={group.label}>
          <div className="skill-col-label">{group.label}</div>
          <MarqueeRow items={group.items} reverse={group.reverse} duration={group.duration} />
        </div>
      ))}
    </div>
  );
}
