import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Cards from "./index";

const mockUserSubmission1 = {
  title: "Mr",
  firstName: "Ollie",
  lastName: "Murphree",
  dateOfBirth: {
    day: "01",
    month: "07",
    year: "1970",
  },
  annualIncome: "34000",
  employmentType: "fullTime",
  houseNumber: "700",
  postCode: "BS14 9PR",
};

const mockUserSubmission2 = {
  title: "Miss",
  firstName: "Elizabeth",
  lastName: "Edmundson",
  dateOfBirth: {
    day: "29",
    month: "06",
    year: "1984",
  },
  annualIncome: "17000",
  employmentType: "student",
  houseNumber: "177",
  postCode: "PH12 8UW",
};

const mockUserSubmission3 = {
  title: "Mr",
  firstName: "Trevor",
  lastName: "Reick",
  dateOfBirth: {
    day: "07",
    month: "09",
    year: "1990",
  },
  annualIncome: "15000",
  employmentType: "partTime",
  houseNumber: "343",
  postCode: "TS25 2NF",
};

describe("Cards", () => {
  it("should render default card page", () => {
    render(
      <BrowserRouter>
        <Cards hasSubmitted={false} />
      </BrowserRouter>
    );
    expect(screen.getByText("Check Eligibility")).toBeInTheDocument();
    expect(screen.queryByText("Apr: 33.9%")).not.toBeInTheDocument();
    userEvent.click(screen.getByText("Anywhere Card"));
    expect(screen.getByText("Apr: 33.9%")).toBeInTheDocument();
    expect(
      screen.queryByText("Total credit available: £300")
    ).not.toBeInTheDocument();
  });

  it("should list Anywhere Card & Liquid Life as eligible options", () => {
    render(
      <BrowserRouter>
        <Cards hasSubmitted={true} userSubmission={mockUserSubmission1} />
      </BrowserRouter>
    );
    expect(screen.queryByText("Check Eligibility")).not.toBeInTheDocument();
    expect(screen.getByText("Anywhere Card")).toBeInTheDocument();
    expect(screen.getByText("Liquid Card")).toBeInTheDocument();
    expect(screen.queryByText("Student Life")).not.toBeInTheDocument();
  });

  it("should list all cards as eligible options and display total credit value when all options clicked", () => {
    render(
      <BrowserRouter>
        <Cards hasSubmitted={true} userSubmission={mockUserSubmission2} />
      </BrowserRouter>
    );
    expect(screen.getByText("Anywhere Card")).toBeInTheDocument();
    expect(screen.getByText("Liquid Card")).toBeInTheDocument();
    expect(screen.getByText("Student Life")).toBeInTheDocument();

    expect(
      screen.queryByText("Total credit available: £4500")
    ).not.toBeInTheDocument();

    userEvent.click(screen.getByText("Anywhere Card"));
    expect(
      screen.getByText("Total credit available: £300")
    ).toBeInTheDocument();
    userEvent.click(screen.getByText("Liquid Card"));
    expect(
      screen.getByText("Total credit available: £3300")
    ).toBeInTheDocument();
    userEvent.click(screen.getByText("Student Life"));
    expect(
      screen.getByText("Total credit available: £4500")
    ).toBeInTheDocument();
  });

  it("should list Anywhere Card as eligible option", () => {
    render(
      <BrowserRouter>
        <Cards hasSubmitted={true} userSubmission={mockUserSubmission3} />
      </BrowserRouter>
    );
    expect(screen.getByText("Anywhere Card")).toBeInTheDocument();
    expect(screen.queryByText("Liquid Card")).not.toBeInTheDocument();
    expect(screen.queryByText("Student Life")).not.toBeInTheDocument();
  });
});
