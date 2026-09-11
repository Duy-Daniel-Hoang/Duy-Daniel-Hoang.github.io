const shared = {
  name: "Hoang Tan Duy",
  linkedin: "LinkedIn ↗",
  email: "hoangtanduynx@gmail.com",
  projectRoles: ["AI LEADER", "AI ENGINEER", "AI ENGINEER", "AI ENGINEER"],
};

export const HOME_COPY = {
  en: {
    ...shared,
    seoTitle: "Hoang Tan Duy — AI / Computer Vision Engineer",
    seoDescription: "AI / Computer Vision engineer portfolio — multi-agent AI pipelines, LoRA fine-tuning, and production systems.",
    nav: ["About", "Experience", "Work", "Skills", "Contact"],
    eyebrow: "AI / Computer Vision Engineer",
    subtitle: "Daniel — 7+ years, Computer Vision · Generative AI · LLM Agents",
    thesis: [
      ["Good command of English", ""],
      ["Real-world AI product building experience", ", not just POCs or side projects"],
      ["In-depth understanding of production", ": evaluation, monitoring, scaling, deployment..."],
      ["Capability to drive the solution", " rather than just implementing tasks"],
    ],
    meta: "HANOI, VIETNAM ·NAM · AI TEAM LEADER · OPEN TO NEW ROLES",
    seeWork: "See the work",
    contact: "Contact",
    aboutLabel: "01 · About",
    aboutTitle: "Senior AI/ML engineer, generalist by necessity",
    about: [
      "I design and ship end-to-end AI systems across computer vision, generative AI, and LLM-based agents — not research demos, but production systems with real users and acceptance criteria. I own the full path from business requirements and architecture to datasets, fine-tuning, and reliable deployment on AWS, VastAI, or RunPod.",
      "The most interesting problems sit between ‘the model can do this in principle’ and ‘the client needs this to work every time’: multi-agent orchestration on the generative side, and domain gaps with strict false-negative targets on the detection side.",
      "I also lead: mentoring engineers and interns, running technical and model reviews, and translating between business stakeholders and engineering teams.",
    ],
    experienceLabel: "02 · Experience",
    experienceTitle: "Where I’ve worked",
    jobs: [
      { date: "APR 2024 — PRESENT", role: "AI Team Leader / AI Engineer", company: "SotaTek", desc: "Leading AI sub-teams across generative and computer-vision client projects, from architecture and model strategy through production deployment. Includes Flickrz, DrawMind, TryNectar, and Bloom." },
      { date: "FEB 2019 — MAR 2024", role: "AI Engineer", company: "BHSoft", desc: "Five years building and deploying early AI/ML systems — the foundation for my later specialization in computer and generative AI." },
    ],
    workLabel: "03 · Selected Work",
    workTitle: "Featured projects",
    workIntro: "Four production systems, ordered by how central they are to my current focus: agent orchestration and computer vision under real constraints. Flickrz, DrawMind, and TryNectar include full case studies.",
    projects: [
      { descA: "Webtoon AI image-generation platform for a Korean distributor with 60M+ users. Designed a ", strong: "multi-agent pipeline", descB: " with specialized writing, review, prompting, and quality-supervision agents, plus two human-in-the-loop gates. LoRA fine-tuning preserves character identity across hundreds of panels.", link: "View case study" },
      { descA: "An AI agent system that reads and reasons deeply over technical engineering drawings. LLM/VLM capabilities are grounded by purpose-built tools, including an RT-DETR detection and segmentation pipeline that locates View, Note, and Table regions with ", strong: "mAP above 0.95", descB: " despite limited data and compute constraints.", link: "View case study" },
      { descA: "Production multi-agent LLM system for biological agriculture, giving farmers data-driven treatment recommendations. LangGraph routes crop-lifecycle and environmental data through a RAG pipeline validated with agronomists.", strong: "", descB: "", link: "View case study" },
      { descA: "Live, profitable multimodal AI companion product spanning text, image, and video generation. Improved latency and character consistency at scale through ComfyUI, LangGraph, dynamic persona injection, and context-window management.", strong: "", descB: "", link: "View case study" },
    ],
    secondary: [
      ["2D Drawing Generation", "CAD-intelligence system that learns 3D geometry and generates structured 2D engineering drawings using GNN feature recognition and Point Cloud Transformer embeddings; over 90% accuracy on major feature classes internally."],
      ["RAG Legal Lookup", "Citation-grounded legal research assistant for traffic-safety law, with tailored chunking, embeddings, metadata filtering, and LLM re-ranking; adopted into daily legal-advisor workflows."],
      ["Marketing Image Gen", "On-premise Stable Diffusion tool integrated into the company CMS via FastAPI, reducing campaign visual turnaround from days to minutes."],
    ],
    skillsLabel: "04 · Skills", skillsTitle: "Capabilities I bring to the team", skillsDesc: "A focused mix of applied AI expertise, production tooling, and hands-on technical leadership.", core: "Core AI / ML", tools: "Tools & Infra", leadership: "Team Leadership",
    education: "Education", university: "Hanoi University of Science and Technology", major: "Information Technology (Global ICT)", languages: "Languages", native: "Vietnamese — Native", fluent: "English — Fluent (C1)",
    contactLabel: "05 · Contact", contactTitle: "Let’s talk.", contactDesc: "Open to new roles in computer vision and applied AI. The fastest way to reach me is LinkedIn.", locationLabel: "Location", location: "Hanoi, Vietnam",
  },
  vi: {
    ...shared,
    name: "Hoàng Tân Duy",
    seoTitle: "Hoàng Tân Duy — Kỹ sư AI / Computer Vision",
    seoDescription: "Portfolio kỹ sư AI / Computer Vision — hệ thống multi-agent, tinh chỉnh LoRA và các sản phẩm AI thực tế.",
    nav: ["Giới thiệu", "Kinh nghiệm", "Dự án", "Kỹ năng", "Liên hệ"],
    eyebrow: "Kỹ sư AI / Computer Vision",
    subtitle: "Daniel — hơn 7 năm kinh nghiệm · Computer Vision · Generative AI · LLM Agents",
    thesis: [["Tiếng Anh thành thạo", ""], ["Kinh nghiệm xây dựng sản phẩm AI thực tế", ", không chỉ dừng ở POC hay dự án cá nhân"], ["Hiểu sâu hệ thống production", ": đánh giá, giám sát, mở rộng và triển khai"], ["Có khả năng dẫn dắt giải pháp", ", không chỉ thực hiện đầu việc"]],
    meta: "HÀ NỘI, VIỆT NAM · AI TEAM LEADER · SẴN SÀNG CHO CƠ HỘI MỚI",
    seeWork: "Xem dự án", contact: "Liên hệ",
    aboutLabel: "01 · Giới thiệu", aboutTitle: "Kỹ sư AI/ML cấp cao với năng lực triển khai toàn diện",
    about: ["Tôi thiết kế và đưa vào vận hành các hệ thống AI end-to-end trong Computer Vision, Generative AI và LLM Agent — không phải demo nghiên cứu, mà là sản phẩm phục vụ người dùng thật với tiêu chí nghiệm thu rõ ràng. Tôi phụ trách xuyên suốt từ yêu cầu kinh doanh, kiến trúc, dữ liệu và fine-tuning đến triển khai ổn định trên AWS, VastAI hoặc RunPod.", "Những bài toán thú vị nhất thường nằm giữa ‘mô hình có thể làm được’ và ‘khách hàng cần hệ thống luôn hoạt động đúng’: orchestration multi-agent ở mảng sinh nội dung, cùng domain gap và yêu cầu false negative khắt khe ở mảng detection.", "Tôi cũng đảm nhiệm vai trò dẫn dắt: mentoring kỹ sư và thực tập sinh, tổ chức review kỹ thuật/model, đồng thời kết nối yêu cầu của stakeholder với đội ngũ engineering."],
    experienceLabel: "02 · Kinh nghiệm", experienceTitle: "Quá trình làm việc",
    jobs: [{ date: "04/2024 — HIỆN TẠI", role: "AI Team Leader / AI Engineer", company: "SotaTek", desc: "Dẫn dắt các nhóm AI trong dự án Generative AI và Computer Vision cho khách hàng, từ kiến trúc, chiến lược model đến triển khai production; tiêu biểu gồm Flickrz, DrawMind, TryNectar và Bloom." }, { date: "02/2019 — 03/2024", role: "AI Engineer", company: "BHSoft", desc: "Năm năm xây dựng và triển khai các hệ thống AI/ML, tạo nền tảng cho hướng chuyên sâu sau này về Computer Vision và Generative AI." }],
    workLabel: "03 · Dự án tiêu biểu", workTitle: "Sản phẩm nổi bật", workIntro: "Bốn hệ thống production thể hiện trọng tâm hiện tại của tôi: AI Agent orchestration và Computer Vision trong các ràng buộc thực tế. Flickrz, DrawMind và TryNectar có case study chi tiết.",
    projects: [{ descA: "Nền tảng tạo ảnh webtoon bằng AI cho nhà phân phối Hàn Quốc có hơn 60 triệu người dùng. Tôi thiết kế ", strong: "pipeline multi-agent", descB: " gồm các agent chuyên trách viết, review, tạo prompt và giám sát chất lượng, kết hợp hai điểm kiểm duyệt human-in-the-loop. LoRA giúp duy trì nhất quán nhân vật qua hàng trăm khung truyện.", link: "Xem case study" }, { descA: "Hệ thống AI Agent đọc và suy luận sâu trên bản vẽ kỹ thuật. LLM/VLM được cung cấp ngữ cảnh chính xác qua các tool chuyên biệt, trong đó có pipeline RT-DETR để detection và segmentation các vùng View, Note, Table với ", strong: "mAP trên 0,95", descB: " dù dữ liệu và tài nguyên tính toán hạn chế.", link: "Xem case study" }, { descA: "Hệ thống LLM multi-agent production cho nông nghiệp sinh học, cung cấp khuyến nghị xử lý dựa trên dữ liệu. LangGraph định tuyến dữ liệu vòng đời cây trồng và môi trường qua pipeline RAG đã được kiểm chứng cùng chuyên gia nông học.", strong: "", descB: "", link: "Xem case study" }, { descA: "Sản phẩm AI companion đa phương thức đang vận hành và có lợi nhuận, hỗ trợ sinh văn bản, hình ảnh và video. Tối ưu độ trễ và tính nhất quán nhân vật ở quy mô lớn bằng ComfyUI, LangGraph, persona động và quản lý context window.", strong: "", descB: "", link: "Xem case study" }],
    secondary: [["Sinh bản vẽ 2D", "Hệ thống CAD intelligence học biểu diễn hình học 3D và tự động sinh bản vẽ kỹ thuật 2D có cấu trúc bằng GNN và Point Cloud Transformer; độ chính xác nội bộ trên 90% ở các nhóm đặc trưng chính."], ["Tra cứu pháp luật bằng RAG", "Trợ lý nghiên cứu luật giao thông có trích dẫn nguồn, sử dụng chiến lược chunking, embedding, lọc metadata và LLM re-ranking; đã được đưa vào quy trình làm việc hằng ngày."], ["Sinh ảnh marketing", "Công cụ Stable Diffusion on-premise tích hợp trực tiếp vào CMS qua FastAPI, rút ngắn thời gian tạo hình ảnh chiến dịch từ vài ngày xuống vài phút."]],
    skillsLabel: "04 · Kỹ năng", skillsTitle: "Năng lực tôi mang đến cho đội ngũ", skillsDesc: "Sự kết hợp giữa chuyên môn AI ứng dụng, công cụ production và năng lực dẫn dắt kỹ thuật trực tiếp.", core: "Core AI / ML", tools: "Công cụ & Hạ tầng", leadership: "Dẫn dắt đội ngũ",
    education: "Học vấn", university: "Đại học Bách khoa Hà Nội", major: "Công nghệ Thông tin (Global ICT)", languages: "Ngôn ngữ", native: "Tiếng Việt — Bản ngữ", fluent: "Tiếng Anh — Thành thạo (C1)",
    contactLabel: "05 · Liên hệ", contactTitle: "Hãy kết nối.", contactDesc: "Tôi sẵn sàng trao đổi về các cơ hội trong Computer Vision và Applied AI. LinkedIn là cách liên hệ nhanh nhất.", locationLabel: "Địa điểm", location: "Hà Nội, Việt Nam",
  },
};

// Japanese and Korean are expanded independently so market-specific wording can
// evolve without coupling them to the English sentence structure.
HOME_COPY.ja = HOME_COPY.en;
HOME_COPY.ko = HOME_COPY.en;
