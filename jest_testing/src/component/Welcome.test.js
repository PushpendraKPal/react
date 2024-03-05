import { render, screen, waitFor } from "@testing-library/react";
import Welcome from "./Welcome";
import userEvent from "@testing-library/user-event";

test("Welcome test", () => {
  render(<Welcome />);

  const welcomeElement = screen.getByText("Welcome");
  expect(welcomeElement).toBeInTheDocument();
});

test("Thanks message", () => {
  render(<Welcome />);

  const thanksElement = screen.getByText("Thanks again.");
  expect(thanksElement).toBeInTheDocument();
});

test("Thanks message", () => {
  render(<Welcome />);

  const textElement = screen.getByText("Keep watching", { exact: false });
  expect(textElement).toBeInTheDocument();
});

test("Thanks message", async () => {
  render(<Welcome />);

  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);

  await waitFor(() => {
    const textElement = screen.queryByText("Thanks for joining Premium", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument();
  });
});
