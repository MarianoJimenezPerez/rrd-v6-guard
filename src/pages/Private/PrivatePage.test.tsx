import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PrivatePage from "./PrivatePage";

describe("<PrivatePage />", () => {
  it("Should render PrivatePage page", () => {
    render(<PrivatePage />);

    expect(screen.getByText("PrivatePage")).toBeDefined();
  });
});
