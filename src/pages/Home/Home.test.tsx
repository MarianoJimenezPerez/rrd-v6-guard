import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  it("Should render public home page", () => {
    render(<Home />);

    expect(screen.getByText("Home")).toBeDefined();
  });
});
