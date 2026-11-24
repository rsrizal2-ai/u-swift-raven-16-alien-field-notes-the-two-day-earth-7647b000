import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of Earth by an alien tourist: the laugh comes from the
// alien's angle on an everyday Earth sight (dog-walkers bagging droppings),
// it reads as a real review with a rating, and the punch lands at the end.
const line =
  "Came for the oceans, stayed for the dogs: the locals follow small furry animals around with bags, collecting their droppings like treasure. 5/5, would orbit again.";

// Mirror the sealed gate only: 1-200 characters and not only whitespace.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line fails the gate at ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
