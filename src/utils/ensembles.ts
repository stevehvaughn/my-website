import { Ensemble } from "../types";

export const ensembles: Record<string, Ensemble> = {
  fcbb: {
    id: 'fcbb', // Unique ID for the ensemble
    name: "Fountain City Brass Band",
    website: "https://fcbb.net/",
    category: "Brass Band",
    logo: "fcbb_logo.jpeg",
  },
  fcs: {
    id: 'fcs',
    name: "Fort Collins Symphony",
    website: "https://fcsymphony.org/",
    category: "Orchestra",
    logo: "fcs_logo.jpg",
  },
  gpo: {
    id: 'gpo',
    name: "Greeley Philharmonic Orchestra",
    website: "https://www.greeleyphil.org/",
    category: "Orchestra",
    logo: "gpo_logo.png",
  },
  dmb: {
    id: 'dmb',
    name: "Denver Municipal Band",
    website: "https://denvermunicipalband.org/",
    category: "Wind Band",
    logo: "dmb_logo.png",
  },
};