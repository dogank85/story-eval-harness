/**
 * Harness entrypoint.
 *
 *   run() — generate a story per synthetic case via the injected generator,
 *           score every case with every evaluator, return a Scorecard.
 *
 * The generator is injected, so the same run() drives the offline fixture, a
 * real provider client, or a candidate model (for A/B diffing).
 *
 * Usage:  npm run eval
 *     or  npx tsx src/run.ts
 */

import { pathToFileURL } from "node:url";
import type { StoryGenerator } from "./adapter";
import { FixtureGenerator } from "./adapter";
import { CASES } from "./fixtures/cases";
import { EVALUATORS } from "./evaluators";
import { printScorecard, type CaseScore, type Scorecard } from "./scorecard";

export async function run(generator: StoryGenerator): Promise<Scorecard> {
  const cases: CaseScore[] = [];
  for (const input of CASES) {
    const output = await generator.generate(input);
    const results = EVALUATORS.map((e) => e.evaluate(input, output));
    cases.push({ caseId: input.caseId, persona: input.childName, results });
  }
  return { generatorId: generator.id, cases };
}

// Direct execution: run the offline fixture baseline and print it.
const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  run(new FixtureGenerator())
    .then((card) => {
      printScorecard(card);
      const failed = card.cases.flatMap((c) => c.results).some((r) => !r.pass);
      process.exit(failed ? 1 : 0); // non-zero on failure → CI-gate ready
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
