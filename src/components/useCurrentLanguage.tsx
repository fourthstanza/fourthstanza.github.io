import { useLocation } from "react-router-dom";

export const useCurrentLanguage = () => {
  const { pathname } = useLocation();
  return pathname.split("/")[1] === "fr" ? "fr" : "en";
};