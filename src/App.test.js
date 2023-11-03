import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamel } from "./App";

import { logRoles } from "@testing-library/dom";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // after button is clicked we expect it to have a color of blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect buttont text to change as well
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  //check button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  //check that the check box starts out unchecked
  const checkBox = screen.getByRole("checkbox", { name: "aaa" });
  expect(checkBox).not.toBeChecked();
});

test("when check box is checked", () => {
  render(<App />);

  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkBox);
  expect(button).toBeEnabled;
});

test("checkbox disabled backgroundcolor = grey", () => {
  render(<App />);

  const checkBox = screen.getByRole("checkbox", { name: "aaa" });
  const button = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(button).toHaveStyle({ backgroundColor: "grey" });
});

describe("spaces before camel cased letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamel("Red")).toBe("Red");
  });

  test("works for one inner cap letter", () => {
    expect(replaceCamel("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple cap letters", () => {
    expect(replaceCamel("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
