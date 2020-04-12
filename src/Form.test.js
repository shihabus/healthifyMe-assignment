import React from "react";
import axiosMock from "axios";
import { render, cleanup } from "@testing-library/react";

import Form from "./Form";

afterEach(cleanup);

jest.mock("axios");

describe("<Form/>", () => {
  const mockSubmit = jest.fn();
  const { getByText } = render(<Form onSubmit={mockSubmit} />);

  test("should ", () => {
    axiosMock.get.mockResolvedValueOnce({
      data: { greeting: "hello there" }
    });

    getByText(/submit/i).click();

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(1).toBe(1);
  });
});
