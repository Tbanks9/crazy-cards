import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  StyledMainContainer,
  StyledFormContainer,
  StyledForm,
  StyledTitleContainer,
  StyledInputContainer,
  StyledUl,
  StyledLi,
  StyledRadioInput,
  StyledRadioLabel,
  StyledLabel,
  StyledInput,
  StyledInputDayMonth,
  StyledInputYear,
  StyledButton,
  StyledOccupationLabel,
} from "./index.styles";
import Cards from "./Cards";

export interface FormTypes {
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  annualIncome?: string | number;
  employmentType: string;
  houseNumber?: string;
  postCode?: string;
}

export const EligibleCards: React.FC = () => {
  const [userSubmission, setUserSubmission] = useState<FormTypes>();
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>();

  const onSubmit = (data: FormTypes) => {
    setUserSubmission(data);
    setHasSubmitted(true);
  };

  return (
    <StyledMainContainer>
      {!hasSubmitted ? (
        <StyledFormContainer>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>Create your account</h1>
              <h2>About you</h2>
              <p>
                We use this information to identify you when calculating your
                score.
              </p>
            </div>
            <StyledTitleContainer>
              <div>
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <StyledUl>
                  <StyledLi>
                    <StyledRadioInput
                      {...register("title")}
                      type="radio"
                      name="title"
                      value="mr"
                      id="Mr"
                      key="1"
                    />
                    <StyledRadioLabel htmlFor="Mr">Mr</StyledRadioLabel>
                  </StyledLi>
                  <StyledLi>
                    <StyledRadioInput
                      {...register("title")}
                      type="radio"
                      name="title"
                      value="mrs"
                      id="Mrs"
                      key="1"
                    />
                    <StyledRadioLabel htmlFor="Mrs">Mrs</StyledRadioLabel>
                  </StyledLi>
                  <StyledLi>
                    <StyledRadioInput
                      {...register("title")}
                      type="radio"
                      name="title"
                      value="miss"
                      id="Miss"
                      key="1"
                    />
                    <StyledRadioLabel htmlFor="Miss">Miss</StyledRadioLabel>
                  </StyledLi>
                  <StyledLi>
                    <StyledRadioInput
                      {...register("title")}
                      type="radio"
                      name="title"
                      value="ms"
                      id="Ms"
                      key="1"
                    />
                    <StyledRadioLabel htmlFor="Ms">Ms</StyledRadioLabel>
                  </StyledLi>
                  <StyledLi>
                    <StyledRadioInput
                      {...register("title")}
                      type="radio"
                      name="title"
                      value="dr"
                      id="Dr"
                      key="1"
                    />
                    <StyledRadioLabel htmlFor="Dr">Dr</StyledRadioLabel>
                  </StyledLi>
                </StyledUl>
              </div>

              {errors.title && (
                <div id="title-error" role="alert" className="error">
                  This field is required.
                </div>
              )}
            </StyledTitleContainer>
            <StyledInputContainer>
              <StyledLabel htmlFor="first-name">First name</StyledLabel>
              <div style={{ width: "384px" }}>
                <StyledInput
                  id="firstName"
                  type="text"
                  maxLength={30}
                  autoComplete="firstName"
                  placeholder="First name"
                  aria-required="true"
                  aria-describedby="first-name-error"
                  {...register("firstName", {
                    required: true,
                    minLength: 2,
                    maxLength: 30,
                  })}
                />
              </div>
              {errors.firstName && errors.firstName.type === "required" && (
                <span>This field is required.</span>
              )}
              {errors.firstName && errors.firstName.type === "maxLength" && (
                <span>Must be under 30 letters.</span>
              )}
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel htmlFor="last-name">Last name</StyledLabel>
              <div>
                <StyledInput
                  id="lastName"
                  type="text"
                  maxLength={30}
                  autoComplete="lastName"
                  placeholder="Last name"
                  aria-describedby="last-name-error"
                  aria-required="true"
                  {...register("lastName", {
                    required: true,
                    minLength: 2,
                    maxLength: 30,
                  })}
                />
              </div>
              {errors.lastName && errors.lastName.type === "required" && (
                <span>This field is required.</span>
              )}
              {errors.lastName && errors.lastName.type === "maxLength" && (
                <span>Must be under 30 letters.</span>
              )}
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel htmlFor="date-of-birth">Date of Birth</StyledLabel>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledInputDayMonth
                  {...register("dateOfBirth.day", {
                    required: true,
                    minLength: 1,
                    maxLength: 2,
                  })}
                  id="day"
                  type="text"
                  inputMode="numeric"
                  placeholder="DD"
                  name="dateOfBirth.day"
                  min="1"
                  max="31"
                  step="1"
                  maxLength={2}
                  aria-describedby="date-of-birth-error"
                  aria-required="true"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <StyledInputDayMonth
                  {...register("dateOfBirth.month", {
                    required: true,
                    minLength: 1,
                    maxLength: 2,
                  })}
                  id="month"
                  type="text"
                  inputMode="numeric"
                  placeholder="MM"
                  name="dateOfBirth.month"
                  min="1"
                  max="12"
                  step="1"
                  maxLength={2}
                  aria-describedby="date-of-birth-error"
                  aria-required="true"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <StyledInputYear
                  {...register("dateOfBirth.year", {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                    min: "1920",
                  })}
                  id="year"
                  type="text"
                  placeholder="YYYY"
                  name="dateOfBirth.year"
                  min="4"
                  max="4"
                  maxLength={4}
                  aria-describedby="date-of-birth-error"
                  aria-required="true"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                {(errors.dateOfBirth &&
                  errors.dateOfBirth?.day?.type === "required") ||
                  errors.dateOfBirth?.month?.type === "required" ||
                  (errors.dateOfBirth?.year?.type === "required" && (
                    <span>Something is wrong with this date.</span>
                  ))}
              </div>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel htmlFor="annual-income">Annual income</StyledLabel>
              <StyledInput
                {...register("annualIncome", {
                  required: true,
                  minLength: 4,
                  maxLength: 7,
                })}
                id="annualIncome"
                placeholder="Annual income"
                type="text"
                min="1"
                max="1000000"
                maxLength={7}
                aria-describedby="annual-income-error"
                aria-required="true"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledOccupationLabel htmlFor="part-time">
                <input
                  {...register("employmentType")}
                  type="radio"
                  name="employmentType"
                  value="partTime"
                  id="part-time"
                  key="1"
                />
                Part time
              </StyledOccupationLabel>
              <StyledOccupationLabel htmlFor="full-time">
                <input
                  {...register("employmentType")}
                  type="radio"
                  name="employmentType"
                  value="fullTime"
                  id="full-time"
                  key="2"
                />
                Full time
              </StyledOccupationLabel>
              <StyledOccupationLabel htmlFor="student">
                <input
                  {...register("employmentType")}
                  type="radio"
                  name="employmentType"
                  value="student"
                  id="student"
                  key="3"
                />
                Student
              </StyledOccupationLabel>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel htmlFor="house-number">House number</StyledLabel>
              <div>
                <StyledInput
                  id="houseNumber"
                  type="text"
                  min="1"
                  maxLength={3}
                  placeholder="House number"
                  aria-describedby="house-number-error"
                  aria-required="false"
                  {...register("houseNumber", {
                    required: false,
                    minLength: 1,
                    maxLength: 3,
                  })}
                />
              </div>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel htmlFor="postcode">Postcode</StyledLabel>
              <div>
                <StyledInput
                  id="postcode"
                  type="text"
                  min="1"
                  maxLength={10}
                  placeholder="Postcode"
                  aria-describedby="postcode-error"
                  aria-required="false"
                  {...register("postCode", {
                    required: false,
                    minLength: 6,
                    maxLength: 10,
                  })}
                />
              </div>
            </StyledInputContainer>
            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </StyledFormContainer>
      ) : (
        <Cards userSubmission={userSubmission} hasSubmitted={hasSubmitted} />
      )}
    </StyledMainContainer>
  );
};

export default EligibleCards;
