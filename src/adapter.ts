/**
 * Model-agnostic generation boundary.
 *
 * The harness never calls a model directly — it calls a StoryGenerator. This is
 * the single decision that makes the harness:
 *   1. safe to publish — the demo uses FixtureGenerator, no real user data.
 *   2. demoable        — runs with zero API keys.
 *   3. model-agnostic  — swap the impl to compare models/prompts without
 *                        touching evaluators or the scorecard.
 *
 * To evaluate a real model, implement this interface against your provider's
 * client (see "Bring your own model" in the README) and pass it to run().
 */

import type { StoryInput, StoryOutput } from "./types";
import { FIXTURE_STORIES } from "./fixtures/cases";

export interface StoryGenerator {
  /** Identifies what produced the output, e.g. "fixture", "candidate-model". */
  readonly id: string;
  generate(input: StoryInput): Promise<StoryOutput>;
}

/**
 * Returns a canned story per synthetic case. Lets the whole harness run offline
 * and deterministically — the baseline for regression diffing.
 */
export class FixtureGenerator implements StoryGenerator {
  readonly id = "fixture";

  async generate(input: StoryInput): Promise<StoryOutput> {
    const story = FIXTURE_STORIES[input.caseId];
    if (!story) {
      throw new Error(`No fixture story for case "${input.caseId}"`);
    }
    return story;
  }
}
