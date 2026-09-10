import { useLocale } from "../i18n/LocaleContext.jsx";

const COPY = {
  en: { title: "Detection accuracy benchmark", general: "General-purpose detection", drawmind: "DrawMind", delta: "at least +0.25 mAP" },
  vi: { title: "So sánh độ chính xác detection", general: "Hệ detection tổng quát", drawmind: "DrawMind", delta: "tối thiểu +0,25 mAP" },
  ja: { title: "検出精度ベンチマーク", general: "汎用検出システム", drawmind: "DrawMind", delta: "mAP +0.25以上" },
  ko: { title: "검출 정확도 벤치마크", general: "범용 검출 시스템", drawmind: "DrawMind", delta: "최소 +0.25 mAP" },
};

export default function MapComparisonChart() {
  const { locale } = useLocale();
  const copy = COPY[locale] ?? COPY.en;
  return (
    <figure className="map-chart" role="img" aria-label={`${copy.drawmind} mAP above 0.95; ${copy.general} approximately 0.70`}>
      <div className="map-chart-head"><figcaption>{copy.title}</figcaption><span>{copy.delta}</span></div>
      <div className="map-chart-vertical">
        <div className="map-chart-axis" aria-hidden="true"><span>1.00</span><span>0.75</span><span>0.50</span><span>0.25</span><span>0</span></div>
        <div className="map-chart-plot">
          <div className="map-chart-column" style={{ "--score": "70%" }}><div className="map-chart-value">~0.70</div><div className="map-chart-bar map-chart-bar--general" /><div className="map-chart-label">{copy.general}</div></div>
          <div className="map-chart-column" style={{ "--score": "95%" }}><div className="map-chart-value">&gt;0.95</div><div className="map-chart-bar map-chart-bar--drawmind" /><div className="map-chart-label">{copy.drawmind}</div></div>
        </div>
      </div>
    </figure>
  );
}
