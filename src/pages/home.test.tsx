import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Home } from "./home";

// Exact, anchored matches throughout: toHaveTextContent is a *substring*
// match, so `toHaveTextContent(/^Clicked 1 time$/)` also passes on the buggy
// "Clicked 1 times" — which is precisely the pluralisation this file exists to
// pin down. Stryker catches the gap (the `count === 1` mutant survives an
// unanchored assertion); the regex closes it.
const count = () => screen.getByTestId("count");
const increment = () => screen.getByRole("button", { name: "Increment" });
const reset = () => screen.getByRole("button", { name: "Reset" });

describe("Home", () => {
  it("renders the page heading", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Front End" })).toBeInTheDocument();
  });

  it("starts at zero", () => {
    render(<Home />);

    expect(count()).toHaveTextContent(/^Clicked 0 times$/);
  });

  it("counts each click", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(increment());
    await user.click(increment());

    expect(count()).toHaveTextContent(/^Clicked 2 times$/);
  });

  it("says 'time', not 'times', at exactly one", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(increment());

    expect(count()).toHaveTextContent(/^Clicked 1 time$/);
  });

  it("disables Reset until there is something to reset", async () => {
    const user = userEvent.setup();
    render(<Home />);

    expect(reset()).toBeDisabled();

    await user.click(increment());

    expect(reset()).toBeEnabled();
  });

  it("returns the count to zero on reset", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(increment());
    await user.click(reset());

    expect(count()).toHaveTextContent(/^Clicked 0 times$/);
    expect(reset()).toBeDisabled();
  });
});
