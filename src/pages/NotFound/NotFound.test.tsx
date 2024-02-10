import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("Should render public NotFound page", () => {
    render(<NotFound />);

    expect(screen.getByText("NotFound")).toBeDefined();
  });
});
