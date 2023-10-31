import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import { logRoles } from "@testing-library/dom";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // after button is clicked we expect it to have a color of blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect buttont text to change as well
  expect(colorButton).toHaveTextContent("Change to red");
});
