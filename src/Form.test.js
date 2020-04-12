import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Form from "./Form";

afterEach(cleanup);

describe("<Form/>", () => {
  const mockSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Form onSubmit={mockSubmit} />);

  test("should ", () => {
    getByText(/submit/i).click();

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(1).toBe(1);
  });
});
