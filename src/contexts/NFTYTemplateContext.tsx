import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../@core/scss/core.scss";

export const NFTYTemplateContext = React.createContext<{
  brandLogoImage?: string;
}>({ brandLogoImage: undefined });

export const useNFTYTemplate = () => useContext(NFTYTemplateContext);

const NFTYTemplateProvider: React.FC<{
  initialValues?: { brandLogoImage?: string };
  children: React.ReactElement;
}> = ({ initialValues, children }) => {
  return (
    <NFTYTemplateContext.Provider value={initialValues || {}}>
      {children}
    </NFTYTemplateContext.Provider>
  );
};

export default NFTYTemplateProvider;
