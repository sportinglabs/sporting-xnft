import { useMemo } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const basePaths = ["/", "/balance", "/mint"];
export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const title = useMemo(() => {
    if (pathname !== "/") {
      const segments = pathname.split("/");
      return pathname.split("/")[segments.length - 1];
    }
    return "Home";
  }, [pathname]);
  return (
    <div className="header">
    </div>
  );
}
