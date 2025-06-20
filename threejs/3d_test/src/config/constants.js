import { swatch, fileIcon, ai, logoShirt, expand, download, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "expand",
    icon: expand,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt", 
    icon: stylishShirt,
  },
  // {
  //   name: "download", 
  //   icon: download,
  // },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};


export const navLists = [
  { label: "Home", path: "/" },
  { label: "T-shirt", path: "/shirt" },
  { label: "Mug", path: "/mug" },
  { label: "About us", path: "/about" },
  { label: "Contact us", path: "/contact" },
];