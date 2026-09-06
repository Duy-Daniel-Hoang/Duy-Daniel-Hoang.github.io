import { Outlet } from "react-router-dom";

export default function PortfolioLayout() {
  return (
    <div className="portfolio-root">
      <Outlet />
    </div>
  );
}
