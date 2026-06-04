# Regression Demo Transcript

This transcript shows the harness catching a quality regression. The baseline fixture set passes all checks. The candidate generator keeps the story schema valid, but over-writes one story for a young reader, pushing readability from an appropriate level to college-level prose.

## Command

```bash
npm run eval:regression
```

## Key Result

```text
=== BEFORE: baseline fixtures ===

generator: fixture

  24/24 checks passed

=== AFTER: candidate that over-writes for young readers ===

generator: candidate-overwriting

  Leo
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    FAIL  readability        0.00  FK grade 18.7 vs ≤2.5 for ages 5-7

  23/24 checks passed

regression diff: fixture → candidate-overwriting
  Leo · readability: PASS → FAIL
```

## Why It Matters

The candidate output is still structurally valid, so a schema-only check would pass it. The readability evaluator catches that the prose is no longer appropriate for a 5-7 age band. This is the exact regression the harness is designed to surface before a prompt or model change ships.

## Full Output

```text
=== BEFORE: baseline fixtures ===

generator: fixture

  Leo
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade -0.8 vs ≤2.5 for ages 5-7

  Aria
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 0.8 vs ≤2.5 for ages 5-7

  Mia
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade -1.1 vs ≤2.5 for ages 5-7

  Sam
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade -0.6 vs ≤2.5 for ages 5-7

  Noah
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 1.2 vs ≤5 for ages 8-10

  Zoe
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 3 vs ≤5 for ages 8-10

  Kai
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 2.8 vs ≤5 for ages 8-10

  Luna
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 3.2 vs ≤5 for ages 8-10

  Ethan
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 5.8 vs ≤7 for ages 11-12

  Maya
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 5.7 vs ≤7 for ages 11-12

  Ravi
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 6.2 vs ≤7 for ages 11-12

  Iris
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 3.9 vs ≤7 for ages 11-12

  24/24 checks passed

=== AFTER: candidate that over-writes for young readers ===

generator: candidate-overwriting

  Leo
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    FAIL  readability        0.00  FK grade 18.7 vs ≤2.5 for ages 5-7

  Aria
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 0.8 vs ≤2.5 for ages 5-7

  Mia
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade -1.1 vs ≤2.5 for ages 5-7

  Sam
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade -0.6 vs ≤2.5 for ages 5-7

  Noah
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 1.2 vs ≤5 for ages 8-10

  Zoe
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 3 vs ≤5 for ages 8-10

  Kai
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 2.8 vs ≤5 for ages 8-10

  Luna
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 3.2 vs ≤5 for ages 8-10

  Ethan
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 5.8 vs ≤7 for ages 11-12

  Maya
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 5.7 vs ≤7 for ages 11-12

  Ravi
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 6.2 vs ≤7 for ages 11-12

  Iris
    PASS  schema_validity    1.00  Output matches the 6-scene story contract.
    PASS  readability        1.00  FK grade 3.9 vs ≤7 for ages 11-12

  23/24 checks passed

regression diff: fixture → candidate-overwriting
  Leo · readability: PASS → FAIL
```
