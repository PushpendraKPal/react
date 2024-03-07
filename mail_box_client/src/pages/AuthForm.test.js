import React from "react";
import { render, fireEvent, getAllByText } from "@testing-library/react";
import AuthForm from "./AuthForm";

describe("AuthForm Component", () => {
  test("renders login form by default", () => {
    const { getByLabelText, getByText } = render(<AuthForm />);
    expect(getByLabelText("Email address")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(
      getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "h2" &&
          element.textContent === "Log In"
        );
      })
    ).toBeInTheDocument();
  });

  test('renders signup form when "Sign Up" button is clicked', () => {
    const { getByText, queryByText } = render(<AuthForm />);
    fireEvent.click(getByText("SignUp Here!"));
    expect(
      queryByText((content, element) => {
        return (
          element.textContent === "Sign Up" &&
          element.tagName.toLowerCase() === "h2"
        );
      })
    ).toBeInTheDocument();
  });

  test("updates email state when user types in email input", () => {
    const { getByLabelText } = render(<AuthForm />);
    const emailInput = getByLabelText("Email address");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("updates password state when user types in password input", () => {
    const { getByLabelText } = render(<AuthForm />);
    const passwordInput = getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(passwordInput.value).toBe("password123");
  });

  test('submits login form when "Log In" button is clicked', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<AuthForm />);
    fireEvent.click(getByText("Log In"));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  test('submits signup form when "Sign Up" button is clicked', async () => {
    const { getByText, getByLabelText } = render(<AuthForm />);
    fireEvent.click(getByText("Sign Up"));
    const emailInput = getByLabelText("Email address");
    const passwordInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });
    fireEvent.click(getByText("Sign Up"));
    // You might want to assert on the state changes or API calls in the handleSubmit function
  });
});
