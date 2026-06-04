/**
 * Scorecard: aggregation, terminal rendering, and regression diffing.
 *
 * A scorecard is the JSON artifact a CI gate would consume; diffScorecards is
 * what turns "two runs" into "did anything get worse" — the core of the
 * before/after regression story.
 */

import type { EvalResult } from "./types";

export interface CaseScore {
  caseId: string;
  persona: string;
  results: EvalResult[];
}

export interface Scorecard {
  generatorId: string;
  cases: CaseScore[];
}

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

/** Pretty terminal table — the thing you point the camera at. */
export function printScorecard(card: Scorecard): void {
  console.log(`\n${DIM}generator: ${card.generatorId}${RESET}`);
  for (const c of card.cases) {
    console.log(`\n  ${c.persona}`);
    for (const r of c.results) {
      const mark = r.skipped
        ? `${DIM}SKIP${RESET}`
        : r.pass
          ? `${GREEN}PASS${RESET}`
          : `${RED}FAIL${RESET}`;
      const dim = r.dimension.padEnd(18);
      console.log(`    ${mark}  ${dim} ${r.score.toFixed(2)}  ${DIM}${r.detail}${RESET}`);
    }
  }
  const all = card.cases.flatMap((c) => c.results);
  const scored = all.filter((r) => !r.skipped);
  const passed = scored.filter((r) => r.pass).length;
  const color = passed === scored.length ? GREEN : RED;
  const skipped = all.length - scored.length;
  const suffix = skipped > 0 ? ` (${skipped} skipped)` : "";
  console.log(`\n  ${color}${passed}/${scored.length} checks passed${RESET}${suffix}\n`);
}

/**
 * Compares two runs and reports dimensions that regressed (pass→fail) or
 * improved (fail→pass). This is what a model/prompt swap is graded against.
 */
export function diffScorecards(before: Scorecard, after: Scorecard): void {
  console.log(
    `\n${DIM}regression diff: ${before.generatorId} → ${after.generatorId}${RESET}`,
  );
  let changes = 0;
  for (const afterCase of after.cases) {
    const beforeCase = before.cases.find((c) => c.caseId === afterCase.caseId);
    for (const a of afterCase.results) {
      const b = beforeCase?.results.find((r) => r.dimension === a.dimension);
      if (b && b.pass !== a.pass) {
        changes++;
        const arrow = b.pass ? `${RED}PASS → FAIL${RESET}` : `${GREEN}FAIL → PASS${RESET}`;
        console.log(`  ${afterCase.persona} · ${a.dimension}: ${arrow}`);
      }
    }
  }
  if (changes === 0) console.log(`  ${GREEN}no regressions${RESET}`);
  console.log();
}
