/**
 * Readability evaluator — the visual co-star of the demo.
 *
 * Computes the Flesch-Kincaid grade level of the story prose and checks it
 * against the band for the child's age. A story that reads at grade 9 is wrong
 * for a 6-year-old no matter how "safe" it is. Deterministic and explainable —
 * great regression signal when a prompt or model starts over-writing.
 */

import {
  ageGroupFor,
  type AgeGroup,
  type Evaluator,
  type EvalResult,
  type StoryInput,
  type StoryOutput,
} from "../types";

/** Upper bound on FK grade level considered appropriate for each band. */
const MAX_GRADE: Record<AgeGroup, number> = {
  "5-7": 2.5,
  "8-10": 5.0,
  "11-12": 7.0,
};

function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  const groups = w.match(/[aeiouy]+/g);
  let n = groups ? groups.length : 0;
  if (w.endsWith("e") && n > 1) n -= 1; // silent trailing 'e'
  return Math.max(1, n);
}

/** Flesch-Kincaid Grade Level = 0.39(words/sentences) + 11.8(syll/words) - 15.59 */
function fleschKincaidGrade(text: string): number {
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const words = text.split(/\s+/).filter(Boolean);
  if (sentences.length === 0 || words.length === 0) return 0;
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const grade =
    0.39 * (words.length / sentences.length) +
    11.8 * (syllables / words.length) -
    15.59;
  return Math.round(grade * 10) / 10;
}

export const readability: Evaluator = {
  dimension: "readability",
  evaluate(input: StoryInput, output: StoryOutput): EvalResult {
    if (input.language !== "en") {
      return {
        dimension: "readability",
        pass: true,
        skipped: true,
        score: 1,
        detail: `Skipped: Flesch-Kincaid evaluator currently supports English only, got ${input.language}.`,
      };
    }
    const band = ageGroupFor(input.childAge);
    const max = MAX_GRADE[band];
    const prose = output.scenes.map((s) => s.text).join(" ");
    const grade = fleschKincaidGrade(prose);
    const pass = grade <= max;
    // Score decays as grade overshoots the band ceiling.
    const score = pass ? 1 : Math.max(0, 1 - (grade - max) / max);
    return {
      dimension: "readability",
      pass,
      score: Math.round(score * 100) / 100,
      detail: `FK grade ${grade} vs ≤${max} for ages ${band}`,
    };
  },
};
