import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i)
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  // These are the query inputs
  const firstName = screen.getByLabelText(/first Name/i);
  const lastName = screen.getByLabelText(/last Name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);

  // These are the test success can enter input
  fireEvent.change(firstName, {target: {value: ""}});
  fireEvent.change(lastName, {target: {value: ""}});
  fireEvent.change(address, {target: {value: ""}});
  fireEvent.change(city, {target: {value: ""}});
  fireEvent.change(state, {target: {value: ""}});
  fireEvent.change(zip, {target: {value: ""}});

  //Test for success checkout button works
  const checkoutArr = screen.getAllByText(/checkout/i);
  const checkoutButton = checkoutArr[1];
  fireEvent.click(checkoutButton);

  //test to see is message does display on screen
  const successMessage = screen.getByTestId("successMessage");
  expect(successMessage).toBeInTheDocument;
});
