/**
 * Regression demo — the 90-second money shot.
 *
 * Shows the harness catching a quality regression that a human reviewer skimming
 * output would likely miss. We run the green fixture baseline, then a "candidate"
 * generator that returns denser, over-written prose for one young-reader case,
 * and diff the two scorecards: the readability row flips PASS → FAIL.
 *
 * Nothing in the golden set is edited — the regression lives only in this demo
 * generator, so `npm run eval` stays green.
 *
 * Usage:  npm run eval:regression
 */

import type { StoryGenerator } from "./adapter";
import { FixtureGenerator } from "./adapter";
import { FIXTURE_STORIES } from "./fixtures/cases";
import type { StoryInput, StoryOutput } from "./types";
import { run } from "./run";
import { diffScorecards, printScorecard } from "./scorecard";

/** The case we degrade — a 5-7 reader, where over-writing is most harmful. */
const REGRESSED_CASE = "leo-superhero-5-7";

/**
 * Stand-in for "a new prompt/model that started over-writing." It returns the
 * real fixtures for every case except one, where it emits grammatically fine but
 * far too advanced prose for a six-year-old.
 */
class OverwritingGenerator implements StoryGenerator {
  readonly id = "candidate-overwriting";

  async generate(input: StoryInput): Promise<StoryOutput> {
    if (input.caseId !== REGRESSED_CASE) {
      return FIXTURE_STORIES[input.caseId];
    }
    return {
      title: "Leo and Spark Undertake an Extraordinary Rescue",
      scenes: [
        { sceneNumber: 1, text: "Leo, resplendent in his crimson cape, sprinted alongside his remarkably energetic companion Spark when an anguished feline cry reverberated across the neighborhood.", sceneDescription: "A boy in a red cape running with his dog toward a distressed cat." },
        { sceneNumber: 2, text: "Perched precariously upon an alarmingly steep rooftop, the terrified creature trembled while Leo meticulously formulated an elaborate rescue strategy.", sceneDescription: "A frightened cat trembling on a steep rooftop." },
        { sceneNumber: 3, text: "Demonstrating considerable determination, Leo ascended the entangled vegetation while Spark conscientiously stabilized the supporting rope beneath him.", sceneDescription: "A boy climbing vines while a dog holds a rope." },
        { sceneNumber: 4, text: "Upon reaching the summit, Leo extended a reassuring hand, whereupon the grateful animal cautiously transferred itself into his protective embrace.", sceneDescription: "A boy reaching the rooftop and gathering the cat into his arms." },
        { sceneNumber: 5, text: "Their gradual descent proceeded uneventfully, as the exceptionally reliable rope and Spark's unwavering vigilance guaranteed everyone's continued safety.", sceneDescription: "A boy carefully climbing down while a dog steadies the rope." },
        { sceneNumber: 6, text: "Ultimately reunited with its overjoyed family, the rescued feline purred contentedly while Leo and Spark basked in their well-deserved recognition.", sceneDescription: "A happy family reunited with their cat, thanking the boy and dog." },
      ],
      wordCount: 110,
    };
  }
}

async function main(): Promise<void> {
  const before = await run(new FixtureGenerator());
  const after = await run(new OverwritingGenerator());

  console.log("\n=== BEFORE: baseline fixtures ===");
  printScorecard(before);

  console.log("=== AFTER: candidate that over-writes for young readers ===");
  printScorecard(after);

  diffScorecards(before, after);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
