import React from "react";
import { render } from "@testing-library/react";
import App from '../App'
import { screen } from "@testing-library/react";

describe("Root component", () => {
  it("should be in the document", () => {
    render(<App/>);
    expect(screen.getByText(/This is a really complicated application/i)).toBeInTheDocument();
  });
});
