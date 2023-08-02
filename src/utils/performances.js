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
    ensembleId: 'dmb',
    title: "Denver Municipal Band Concert",
    dates: ["2023-08-05"],
    venue: {
      name: "Cranmer Park",
      address: "4300 E Third Ave, Denver, CO, 80220",
    },
    role: "Euphonium",
    repertoire: [],
    description: "Hilltop Civic Association Neighborhood Celebration."
  },
  {
    ensembleId: 'dmb',
    title: "Denver Municipal Band Concert",
    dates: ["2023-08-11"],
    venue: {
      name: "Sterne Park",
      address: "5932 S Spotswood St, Littleton, CO, 80120",
    },
    role: "Euphonium",
    repertoire: [],
    description: "Western Welcome Week Performance."
  },
  {
    ensembleId: 'dmb',
    title: "Denver Municipal Band Concert",
    dates: ["2023-08-17"],
    venue: {
      name: "Conservatory Green",
      address: "8303 E 49th Pl, Denver, CO 80238",
    },
    role: "Euphonium",
    repertoire: [],
    description: "MCA80238 Neighborhood Celebration."
  },
  {
    ensembleId: 'fcbb',
    title: "Brass Machine",
    dates: ["2023-09-16"],
    venue: {
      name: "Bell Center",
      address: "Midamerica Nazarene University, 2030 E College Way, Olathe, KS",
    },
    role: "Euphonium",
    repertoire: [],
    description: "Don't miss out on the 2023-2024 season opener by Fountain City Brass Band! Join us for an unforgettable night of music conducted by Dr. Joseph Parisi. With the title of Brass Machine, you can expect an electrifying performance that will leave you in awe. Come experience America's top-ranked brass band, and be a part of a night you won't forget! Get your tickets now before they sell out."
  },
  {
    ensembleId: 'fcbb',
    title: "US Masters Gala Concert",
    dates: ["2023-11-11"],
    venue: {
      name: "Blue Valley North High School",
      address: "12200 Lamar Ave, Overland Park, KS",
    },
    role: "Euphonium",
    repertoire: [],
    description: "The US Masters Brass Entertainment Championships is an exciting event that showcases the best brass and percussion musicians in the country. This in-person event will take place on Saturday, November 11, 2023 at Blue Valley North High School at 12200 Lamar Avenue, Overland Park, KS 66209. The first band begins at 10:00 AM central time and concludes with a gala concert performance at 7:00 PM by the United States top ranked brass band, the Fountain City Brass Band, who will be joined by international trumpet superstar, Jens Lindemann."
  },
  {
    ensembleId: 'fcbb',
    title: "World of Brass in Concert: BONE-AFIDE and Fountain City Brass Band",
    dates: ["2023-11-17"],
    venue: {
      name: "Sage Gateshead",
      address: "St Mary's Square, Gateshead Quays, Gateshead, England, United Kingdom",
    },
    role: "Euphonium",
    repertoire: [],
    description: `Brass favourites BONE-AFIDE and Fountain City Brass Band have teamed up to offer a lively evening’s entertainment in this special one-off musical collaboration. BONE-AFIDE is a popular international chamber ensemble made up of some of Europe’s leading young trombonists. Fountain City is an acclaimed North American brass band with members from across the United States and abroad.  A Brass in Concert favourite, this is a rare opportunity to hear this stunning band perform at their return to the Festival for the first time since 2018. Taking place the eve of the annual Brass in Concert Championship, the evening will be introduced by Brass in Concert host, the famous Frank Renton.`
  },
  {
    ensembleId: 'fcbb',
    title: "Brass in Concert",
    dates: ["2023-11-18"],
    venue: {
      name: "Sage Gateshead",
      address: "St Mary's Square, Gateshead Quays, Gateshead, England, United Kingdom",
    },
    role: "Euphonium",
    repertoire: [],
    description: `The 46th Brass in Concert Festival, presented in association with World of Brass, Banks Group and Yamaha, sees the long-anticipated return of the event’s gala concert, World of Brass in Concert, plus a revamped ‘Aspire’ education programme and pre and post-event entertainment for the Championship itself. 11 of the finest brass bands in the world will come together, each offering a uniquely crafted performance devised to entertain. They are: Grimethorpe Colliery, Brighouse and Rastrick, Friary Brass, Eikanger-Bjørsvik Musikklag, Hammonds, Foden’s, Carlton Main Frickley Colliery, Tredegar, Aldbourne, Flowers and Fountain City Brass.`
  },
];