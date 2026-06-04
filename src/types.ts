/**
 * Core types for the story evaluation harness.
 *
 * StoryInput / StoryOutput are deliberately generic: a generator maps its own
 * request/response shape onto them, so the harness stays decoupled from any
 * specific model or provider.
 */

export type AgeGroup = "5-7" | "8-10" | "11-12";

export type AdventureTemplate =
  | "superhero_rescue"
  | "treasure_hunt"
  | "magic_training"
  | "space_explorer";

/** Input persona for one story generation. Synthetic only — never real child data. */
export interface StoryInput {
  caseId: string;
  childName: string;
  childAge: number;
  petName?: string;
  adventureTemplate: AdventureTemplate;
  language: string;
}

/** One narrative scene of a generated story. */
export interface StoryScene {
  sceneNumber: number;
  text: string;
  sceneDescription: string;
}

/** The generator's output, the unit every evaluator scores. */
export interface StoryOutput {
  title: string;
  scenes: StoryScene[];
  wordCount: number;
}

/** Result of one evaluator running against one story. */
export interface EvalResult {
  dimension: string;
  pass: boolean;
  /** True when an evaluator intentionally does not score this case. */
  skipped?: boolean;
  /** Normalized 0..1; 1 = perfect, lets us show regressions, not just pass/fail. */
  score: number;
  detail: string;
}

/** An evaluator scores one (input, output) pair on a single dimension. */
export interface Evaluator {
  readonly dimension: string;
  evaluate(input: StoryInput, output: StoryOutput): EvalResult;
}

/** Maps a child's age to the complexity band used by readability checks. */
export function ageGroupFor(age: number): AgeGroup {
  if (age <= 7) return "5-7";
  if (age <= 10) return "8-10";
  return "11-12";
}
