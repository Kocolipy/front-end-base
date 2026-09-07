import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * The one page in the baseline. It exists to prove the stack is wired end to
 * end — Tailwind tokens render, a ui primitive mounts, state updates — and to
 * give the unit suite and the smoke E2E something with behaviour to assert.
 */
export function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Front End</h1>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Baseline is live</CardTitle>
          <CardDescription>
            React + Vite + Tailwind, with the tooling gates wired up.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground" data-testid="count">
            Clicked {count} {count === 1 ? "time" : "times"}
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button onClick={() => setCount((current) => current + 1)}>Increment</Button>
          <Button variant="outline" onClick={() => setCount(0)} disabled={count === 0}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
