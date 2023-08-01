import { performances } from "@utils/performances";
import { ensembles } from "@utils/ensembles";

export default function handler(req, res) {
  const performancesWithEnsembles = performances.map((performance) => ({
    ...performance,
    ensemble: ensembles[performance.ensembleId],
  }));

  res.status(200).json(performancesWithEnsembles);
}