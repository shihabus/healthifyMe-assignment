import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Input from "./Input";

afterEach(cleanup);

describe("<Input/>", () => {
  const { getByTestId } = render(<Input />);
  const input = getByTestId("input");

  test("Input onChange", () => {
    const inputVal = "we run all over the fox";
    fireEvent.change(input, { target: { value: inputVal } });
    expect(input.value).toBe(inputVal);
  });
});
