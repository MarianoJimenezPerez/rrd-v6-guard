import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("<Login />", () => {
  it("Should render public Login page", () => {
    render(<Login />);

    expect(screen.getByText("Login")).toBeDefined();
  });
});
