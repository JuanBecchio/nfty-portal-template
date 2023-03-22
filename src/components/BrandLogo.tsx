import React from "react";
import { useNFTYTemplate } from "../contexts/NFTYTemplateContext";

const BrandLogo: React.FC = () => {
  const { brandLogoImage } = useNFTYTemplate();
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
        src={brandLogoImage}
        style={{ aspectRatio: 1, width: "100%", margin: "10%" }}
      />
    </a>
  );
};

export default BrandLogo;
