import React from "react";
import { TEMPLATE_DEFAULT_CONFIG } from "../contexts/NFTYTemplateContext";

const BrandLogo: React.FC = () => {
  return (
    <a
      href="/"
      className="brand-logo"
      style={{
        maxHeight: 250,
        height: "100%",
        aspectRatio: 1,
        margin: "auto",
      }}
    >
      <img
        src={TEMPLATE_DEFAULT_CONFIG.appLogoImage}
        style={{ aspectRatio: 1, width: "100%", margin: "10%" }}
      />
    </a>
  );
};

export default BrandLogo;
