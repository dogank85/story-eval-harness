/**
 * The active evaluator set.
 *
 * Ships the two deterministic gates. Roadmap adds, in order:
 *   - personalization  — child & pet names present, consistent, never drift
 *   - length           — word count within the per-age band
 *   - banned_content    — deterministic lexicon pass (fast safety floor)
 *   - safety (LLM-judge) — subtle scary/unsafe themes a lexicon misses
 *
 * Adding an evaluator is one import + one array entry; the runner and scorecard
 * pick it up automatically.
 */

import type { Evaluator } from "../types";
import { schemaValidity } from "./schemaValidity";
import { readability } from "./readability";

export const EVALUATORS: Evaluator[] = [schemaValidity, readability];
