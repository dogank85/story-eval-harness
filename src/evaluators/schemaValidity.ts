/**
 * Schema-validity evaluator.
 *
 * The cheapest, most fundamental gate: did the model return the structure the
 * app can actually render? A story that fails here would crash the UI or the
 * image pipeline regardless of how good the prose is. Deterministic, free, fast.
 */

import { z } from "zod";
import type { Evaluator, EvalResult, StoryInput, StoryOutput } from "../types";

const StoryOutputSchema = z.object({
  title: z.string().min(1),
  scenes: z
    .array(
      z.object({
        sceneNumber: z.number().int().positive(),
        text: z.string().min(1),
        sceneDescription: z.string().min(1),
      }),
    )
    .length(6), // stories are exactly 6 scenes
  wordCount: z.number().int().positive(),
});

export const schemaValidity: Evaluator = {
  dimension: "schema_validity",
  evaluate(_input: StoryInput, output: StoryOutput): EvalResult {
    const parsed = StoryOutputSchema.safeParse(output);
    if (parsed.success) {
      return {
        dimension: "schema_validity",
        pass: true,
        score: 1,
        detail: "Output matches the 6-scene story contract.",
      };
    }
    const firstIssue = parsed.error.issues[0];
    return {
      dimension: "schema_validity",
      pass: false,
      score: 0,
      detail: `Schema violation at ${firstIssue.path.join(".") || "(root)"}: ${firstIssue.message}`,
    };
  },
};
