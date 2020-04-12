import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./Login";

afterEach(cleanup);

test("test login with username and password", () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<App submit={handleSubmit} />);
  getByLabelText(/username/i).value = "Shihab";
  getByLabelText(/password/i).value = "123";
  getByText(/submit/i).click();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: "Shihab",
    password: "123"
  });
  expect(1).toBe(1);
});
