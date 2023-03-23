import React, { useContext, useMemo } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../@core/scss/core.scss";

type TemplateConfigValues = {
  appFirstName: string;
  appLastName: string;
  appSlug: string;
  appPortal: string;
  appLogoImage: string;
  appLocalStorageKey: string;
};

type TemplateContext = {
  config: TemplateConfigValues;
};

export let TEMPLATE_DEFAULT_CONFIG = {
  appFirstName: "UI",
  appLastName: "Template",
  appSlug: "Slug",
  appPortal: "Portal",
  appLogoImage: "",
  appLocalStorageKey: "NFTYPortalTemplate",
};

export const NFTYTemplateContext = React.createContext<TemplateContext>({
  config: TEMPLATE_DEFAULT_CONFIG,
});

export const useNFTYTemplate = () => useContext(NFTYTemplateContext);

const NFTYTemplateProvider: React.FC<{
  config?: TemplateConfigValues;
  children: React.ReactElement;
}> = ({ config = TEMPLATE_DEFAULT_CONFIG, children }) => {
  const value = useMemo(() => {
    TEMPLATE_DEFAULT_CONFIG = config;
    return { config };
  }, [config]);
  return (
    <NFTYTemplateContext.Provider value={value}>
      {children}
    </NFTYTemplateContext.Provider>
  );
};

export default NFTYTemplateProvider;
