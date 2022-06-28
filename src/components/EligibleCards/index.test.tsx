import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import EligibleCards from "./index";

describe("EligibleCards", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <EligibleCards />
      </BrowserRouter>
    );
    expect(screen.getByText("Create your account")).toBeInTheDocument();
  });

  it("should allow user to input details and submit when required fields are completed", async () => {
    render(
      <BrowserRouter>
        <EligibleCards />
      </BrowserRouter>
    );
    userEvent.click(screen.getByLabelText("Mr"));
    userEvent.type(screen.getByPlaceholderText("First name"), "Ollie");
    userEvent.type(screen.getByPlaceholderText("Last name"), "Murphree");
    userEvent.type(screen.getByPlaceholderText("DD"), "01");
    userEvent.type(screen.getByPlaceholderText("MM"), "07");
    userEvent.type(screen.getByPlaceholderText("YYYY"), "1970");
    userEvent.type(screen.getByPlaceholderText("YYYY"), "1970");
    userEvent.type(screen.getByPlaceholderText("Annual income"), "34000");
    userEvent.click(screen.getByLabelText("Full time"));
    userEvent.type(screen.getByPlaceholderText("House number"), "700");
    userEvent.type(screen.getByPlaceholderText("Postcode"), "BS14 9PR");

    userEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText("Available Cards")).toBeInTheDocument();
    expect(screen.queryByText("Create your account")).not.toBeInTheDocument();
  });

  it("should throw error if one or more fields are left empty", async () => {
    render(
      <BrowserRouter>
        <EligibleCards />
      </BrowserRouter>
    );
    userEvent.click(screen.getByLabelText("Mr"));
    userEvent.type(screen.getByPlaceholderText("First name"), "Ollie");
    userEvent.click(screen.getByText("Submit"));

    expect(
      await screen.findByText("This field is required.")
    ).toBeInTheDocument();
  });
});
