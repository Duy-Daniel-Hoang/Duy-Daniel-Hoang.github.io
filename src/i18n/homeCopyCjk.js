const common = { name: "Hoang Tan Duy", linkedin: "LinkedIn ↗", email: "hoangtanduynx@gmail.com", projectRoles: ["AI LEADER", "AI ENGINEER", "AI ENGINEER", "AI ENGINEER"] };

export const HOME_CJK = {
  ja: {
    ...common,
    seoTitle: "Hoang Tan Duy — AI・コンピュータビジョンエンジニア", seoDescription: "マルチエージェント、LoRA、実運用AIシステムを手がけるAI・コンピュータビジョンエンジニアのポートフォリオです。",
    nav: ["プロフィール", "職務経歴", "実績", "スキル", "お問い合わせ"], eyebrow: "AI・コンピュータビジョンエンジニア", subtitle: "Daniel — 実務経験7年以上 · Computer Vision · Generative AI · LLM Agents",
    thesis: [["英語での円滑なコミュニケーション", ""], ["実サービスにおけるAIプロダクト開発経験", " — POCや個人開発にとどまりません"], ["本番運用への深い理解", " — 評価、監視、スケーリング、デプロイまで対応"], ["実装だけでなく、解決策全体を推進", ""]],
    meta: "ベトナム・ハノイ · AI TEAM LEADER · 新たな機会を検討中", seeWork: "実績を見る", contact: "お問い合わせ",
    aboutLabel: "01 · プロフィール", aboutTitle: "実運用まで一貫して担うシニアAI/MLエンジニア",
    about: ["Computer Vision、Generative AI、LLM Agentの領域で、要件整理から本番運用までAIシステムを一貫して設計・開発しています。研究デモではなく、実際のユーザーと明確な受入基準を持つプロダクトが中心です。", "特に注力してきたのは、『モデルとしては可能』な状態を『顧客環境で常に使える』状態へ引き上げることです。生成AIではマルチエージェント、画像認識ではドメインギャップと厳格なfalse negative要件に取り組みました。", "エンジニアの育成、技術・モデルレビュー、ビジネス部門と開発チームの橋渡しなど、チームリードも担っています。"],
    experienceLabel: "02 · 職務経歴", experienceTitle: "これまでの経験", jobs: [{ date: "2024年4月 — 現在", role: "AI Team Leader / AI Engineer", company: "SotaTek", desc: "Generative AIとComputer Vision案件のAIチームをリード。技術設計、モデル戦略から本番導入まで、Flickrz、DrawMind、TryNectar、Bloomを推進しています。" }, { date: "2019年2月 — 2024年3月", role: "AI Engineer", company: "BHSoft", desc: "5年間AI/MLシステムの開発・導入に従事し、Computer VisionとGenerative AIの専門性につながる基盤を築きました。" }],
    workLabel: "03 · 主な実績", workTitle: "代表プロジェクト", workIntro: "AI Agentオーケストレーションと、実環境の制約下におけるComputer Visionを中心とした4つの本番システムです。3件は詳細なケーススタディをご覧いただけます。",
    projects: [
      { descA: "6,000万人以上のユーザーを持つ韓国企業向けWebtoon画像生成基盤。", strong: "マルチエージェントパイプライン", descB: "を設計し、執筆・レビュー・プロンプト・品質管理を分担。human-in-the-loopとLoRAにより数百コマでもキャラクターを一貫させました。", link: "ケーススタディを見る" },
      { descA: "複雑な技術図面を深く読み取り推論するAI Agent。専用ツールでLLM/VLMを補強し、RT-DETRによる検出・セグメンテーションでは限られた資源で", strong: "mAP 0.95超", descB: "を達成しました。", link: "ケーススタディを見る" },
      { descA: "生物農業向け本番マルチエージェントLLM。作物と環境データをLangGraphで、農学専門家と検証したRAGへ連携し、農家に根拠ある対処案を提示します。", strong: "", descB: "", link: "ケーススタディを見る" },
      { descA: "テキスト・画像・動画を統合した、稼働・収益化済みのマルチモーダルAIコンパニオン。ComfyUI、LangGraph、動的persona注入により応答速度と一貫性を改善しました。", strong: "", descB: "", link: "ケーススタディを見る" },
    ],
    secondary: [["2D図面生成", "GNNとPoint Cloud Transformerで3D形状を理解し、構造化2D図面を生成。主要特徴クラスで社内精度90%以上。"], ["RAG法令検索", "交通安全法令の出典付き検索。chunking、metadata filtering、LLM re-rankingを最適化し実務へ導入。"], ["マーケティング画像生成", "社内CMSに統合したStable Diffusion基盤により、制作期間を数日から数分へ短縮。"]],
    skillsLabel: "04 · スキル", skillsTitle: "チームにもたらす力", skillsDesc: "応用AIの専門性、本番運用ツール、実践的な技術リーダーシップを組み合わせて成果へつなげます。", core: "コア AI / ML", tools: "ツール・インフラ", leadership: "チームリーダーシップ", education: "学歴", university: "ハノイ工科大学", major: "情報技術（Global ICT）", languages: "言語", native: "ベトナム語 — ネイティブ", fluent: "英語 — ビジネス上級（C1）", contactLabel: "05 · お問い合わせ", contactTitle: "お気軽にご連絡ください。", contactDesc: "Computer Vision・Applied AI領域の新たな機会を検討しています。LinkedInからのご連絡が最もスムーズです。", locationLabel: "所在地", location: "ベトナム・ハノイ",
  },
  ko: {
    ...common,
    seoTitle: "Hoang Tan Duy — AI / 컴퓨터 비전 엔지니어", seoDescription: "멀티 에이전트, LoRA 및 프로덕션 AI 시스템을 구축해 온 AI / 컴퓨터 비전 엔지니어 포트폴리오입니다.",
    nav: ["소개", "경력", "프로젝트", "기술", "연락처"], eyebrow: "AI / 컴퓨터 비전 엔지니어", subtitle: "Daniel — 실무 경력 7년+ · Computer Vision · Generative AI · LLM Agents",
    thesis: [["원활한 영어 커뮤니케이션", ""], ["실서비스 AI 제품 구축 경험", " — POC나 개인 프로젝트에 그치지 않습니다"], ["프로덕션 전반에 대한 깊은 이해", " — 평가, 모니터링, 확장 및 배포"], ["단순 구현을 넘어 솔루션 전체를 주도", ""]],
    meta: "베트남 하노이 · AI TEAM LEADER · 새로운 기회에 열려 있습니다", seeWork: "프로젝트 보기", contact: "연락하기",
    aboutLabel: "01 · 소개", aboutTitle: "서비스 운영까지 책임지는 시니어 AI/ML 엔지니어", about: ["Computer Vision, Generative AI, LLM Agent 분야에서 요구사항부터 프로덕션 운영까지 end-to-end AI 시스템을 설계하고 출시합니다. 연구용 데모가 아닌 실제 사용자와 검수 기준이 있는 제품을 만들어 왔습니다.", "핵심은 ‘모델이 원리상 가능하다’를 ‘고객 환경에서 매번 안정적으로 동작한다’로 전환하는 일입니다. 생성형 AI에서는 멀티 에이전트 orchestration을, 비전에서는 domain gap과 엄격한 false negative 기준을 해결했습니다.", "엔지니어 멘토링, 기술 및 모델 리뷰, 비즈니스 이해관계자와 개발팀 간 조율 등 팀 리딩도 수행합니다."],
    experienceLabel: "02 · 경력", experienceTitle: "주요 경력", jobs: [{ date: "2024.04 — 현재", role: "AI Team Leader / AI Engineer", company: "SotaTek", desc: "Generative AI 및 Computer Vision 프로젝트의 AI 팀을 이끌며 아키텍처와 모델 전략부터 프로덕션 배포까지 주도합니다. Flickrz, DrawMind, TryNectar, Bloom을 담당했습니다." }, { date: "2019.02 — 2024.03", role: "AI Engineer", company: "BHSoft", desc: "5년간 AI/ML 시스템을 구축·배포하며 Computer Vision과 Generative AI 전문성의 기반을 마련했습니다." }],
    workLabel: "03 · 주요 프로젝트", workTitle: "대표 프로젝트", workIntro: "AI Agent orchestration과 실제 제약 환경의 Computer Vision 역량을 보여 주는 네 가지 프로덕션 시스템입니다. 세 프로젝트는 상세 사례를 제공합니다.",
    projects: [
      { descA: "6천만 명 이상의 사용자를 보유한 한국 유통사를 위한 Webtoon AI 이미지 생성 플랫폼. 글쓰기·검토·프롬프트·품질 관리를 나눈 ", strong: "멀티 에이전트 파이프라인", descB: "과 human-in-the-loop를 설계했으며 LoRA로 수백 패널에서도 캐릭터를 일관되게 유지했습니다.", link: "사례 보기" },
      { descA: "복잡한 기술 도면을 깊이 읽고 추론하는 AI Agent. 전용 도구로 LLM/VLM을 보강하고 RT-DETR 검출·세그멘테이션에서 제한된 자원으로 ", strong: "mAP 0.95 이상", descB: "을 달성했습니다.", link: "사례 보기" },
      { descA: "생물 농업용 프로덕션 멀티 에이전트 LLM. LangGraph가 작물과 환경 데이터를 농학 전문가와 검증한 RAG로 연결해 농가에 근거 기반 처방을 제공합니다.", strong: "", descB: "", link: "사례 보기" },
      { descA: "텍스트·이미지·영상을 통합한 운영 및 수익화 중인 멀티모달 AI companion. ComfyUI, LangGraph, 동적 persona 주입으로 지연 시간과 캐릭터 일관성을 개선했습니다.", strong: "", descB: "", link: "사례 보기" },
    ],
    secondary: [["2D 도면 생성", "GNN과 Point Cloud Transformer로 3D 형상을 이해하고 구조화된 2D 도면을 생성하며 주요 feature class에서 내부 정확도 90% 이상을 달성했습니다."], ["RAG 법률 검색", "교통안전 법령의 출처 기반 검색으로 chunking, metadata filtering, LLM re-ranking을 최적화해 실무에 도입했습니다."], ["마케팅 이미지 생성", "사내 CMS에 통합한 Stable Diffusion 도구로 제작 기간을 수일에서 수분으로 단축했습니다."]],
    skillsLabel: "04 · 기술", skillsTitle: "팀에 기여하는 핵심 역량", skillsDesc: "응용 AI 전문성, 프로덕션 도구, 실무 중심의 기술 리더십을 결합해 성과를 만듭니다.", core: "Core AI / ML", tools: "도구 및 인프라", leadership: "팀 리더십", education: "학력", university: "하노이 과학기술대학교", major: "정보기술(Global ICT)", languages: "언어", native: "베트남어 — 모국어", fluent: "영어 — 유창함(C1)", contactLabel: "05 · 연락처", contactTitle: "함께 이야기해요.", contactDesc: "Computer Vision 및 Applied AI 분야의 새로운 기회를 찾고 있습니다. LinkedIn으로 가장 빠르게 연락하실 수 있습니다.", locationLabel: "위치", location: "베트남 하노이",
  },
};
