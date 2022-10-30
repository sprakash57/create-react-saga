import React from "react";
import { render } from "@testing-library/react";
import User from "./index";

describe("User", () => {
  const mockUser = {
    id: 1,
    name: "john doe",
    email: "",
    address: { city: "", street: "" },
    phone: "",
  };
  test("Should render user card on the screen", () => {
    const { getByText, asFragment } = render(<User user={mockUser} />);
    expect(getByText("Name: john doe")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
