import { render, screen } from "@testing-library/react";
import Data from "./Data";

test("render post request success", async () => {
  render(<Data />);
  const listItemElement = await screen.findAllByRole(
    "listitem",
    {},
    { timeout: 10 }
  );
  expect(listItemElement).not.toHaveLength(0);
});

test("render post with mock", async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce();
  json: async () => {
    [{ id: 1, title: "First Post" }];
  };
  render(<Data />);
  const listItemElement = await screen.findAllByRole(
    "listitem",
    {},
    { timeout: 10 }
  );
  expect(listItemElement).not.toHaveLength(0);
});
