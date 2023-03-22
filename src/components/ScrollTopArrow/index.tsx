import { useState, useEffect } from "react";
import { ArrowUp } from "react-feather";
import { Button } from "reactstrap";

const ScrollTopArrow = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }
  }, []);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        visibility: visible ? "visible" : "hidden",
        position: "fixed",
        right: "1.4rem",
        bottom: "6rem",
      }}
    >
      <div onClick={handleScrollToTop}>
        <Button className="btn-icon" color="primary">
          <ArrowUp size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ScrollTopArrow;
