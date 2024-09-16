import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Unit Test
test("renders CICD text", () => {
  render(<App />);
  const linkElement = screen.getByText('Tuyen');
  expect(linkElement).toBeInTheDocument();
});

test("button click changes text", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  const updatedText = screen.getByText(/Updated Text/i);
  expect(updatedText).toBeInTheDocument();
});

// Integration Test
test("renders About and Contact links", () => {
  render(<App />);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

// Functional Test
test("navigates to About page", () => {
  render(<App />);
  const aboutLink = screen.getByText(/About/i);
  fireEvent.click(aboutLink);
  const aboutHeading = screen.getByText(/About Us/i);
  expect(aboutHeading).toBeInTheDocument();
});

test("navigates to Contact page and submits form", () => {
render(<App />);
  const contactLink = screen.getByText(/Contact/i);
  fireEvent.click(contactLink);
  const nameInput = screen.getByLabelText(/Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageTextarea = screen.getByLabelText(/Message/i);
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
  fireEvent.change(messageTextarea, {
    target: { value: "Hello, this is a test message." },
  });
  fireEvent.click(screen.getByText(/Submit/i));
});
