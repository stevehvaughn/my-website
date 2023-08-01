// performances.js
import { ensembles } from "./ensembles";

export const performances = [
  {
    ensembleId: 'fcbb', // Reference to the ensemble by its ID
    title: "NABBA Championships",
    dates: ["2023-04-21", "2023-04-22"],
    venue: {
      name: "Von Braun Center",
      address: "700 Monroe Street, Huntsville, Alabama 35801",
    },
    role: "Euphonium",
    repertoire: [
      {
        composition: "Titan's Progress",
        composer: "Herman Pallhuber",
      },
      {
        composition: "Own Choice Work",
        composer: "TBA",
      },
    ],
  },
  {
    ensembleId: 'fcs', // Reference to the ensemble by its ID
    title: "Escape to Hope",
    dates: ["2023-05-14"],
    venue: {
      name: "Lincoln Center",
      address: "417 West Magnolia Street, Fort Collins, CO 80521",
    },
    role: "Principal Tuba",
    repertoire: [
      {
        composition: "Global Warming",
        composer: "Michael Abels",
      },
      {
        composition: "Nocturnes",
        composer: "Claude Debussy",
      },
      {
        composition: "Symphony No. 5",
        composer: "Sergei Prokofiev",
      },
    ],
  },
  {
    ensembleId: 'fcbb', // Reference to the ensemble by its ID
    title: "Brass Machine",
    dates: ["2023-09-14"],
    venue: {
      name: "Bell Center",
      address: "Midamerica Nazarene University, 2030 E College Way, Olathe, KS 66051",
    },
    role: "Euphonium",
    repertoire: [],
    description: "Don't miss out on the 2023-2024 season opener by Fountain City Brass Band! Join us for an unforgettable night of music conducted by Dr. Joseph Parisi. With the title of Brass Machine, you can expect an electrifying performance that will leave you in awe. Come experience America's top-ranked brass band, and be a part of a night you won't forget! Get your tickets now before they sell out."
  },
];