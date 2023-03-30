import { venues } from "./venues"
import { ensembles } from "./ensembles"

export const performances = [
  {
    ensemble: ensembles.fcbb,
    title: "NABBA Championships",
    dates: ["2023-04-21", "2023-04-22"],
    venue: venues.vonBraunCenter,
    repertoire: [
      {
        composition: "Titan's Progress",
        composer: "Herman Pallhuber"
      },
      {
        composition: "Own Choice Work",
        composer: "TBA"
      }
    ],
  },
  {
    ensemble: ensembles.fcs,
    title: "Escape to Hope",
    dates: ["2023-05-14"],
    venue: venues.lincolnCenter,
    repertoire: [
      {
        composition: "Global Warming",
        composer: "Michael Abels"
      },
      {
        composition: "Nocturnes",
        composer: "Claude Debussy"
      },
      {
        composition: "Symphony No. 5",
        composer: "Sergei Prokofiev"
      },
    ]
  }
]

export function getAllPerformances() {
  return performances;
}