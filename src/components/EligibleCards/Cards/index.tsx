import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledMainContainer,
  StyledButton,
  StyledFormContainer,
} from "../index.styles";
import { FormTypes } from "../";
import styled from "styled-components";

const StyledCards = styled.div`
  width: 325px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  border: 1px solid #5b6b79;
  padding: 20px;
  margin-bottom: 20px;
  font-family: Nunito, Arial, sans-serif;
  cursor: pointer;
`;

const StyledNav = styled.nav`
  width: fill-available;
  height: fit-content;
  padding: 20px;
  background: #0f0a3a;
`;

interface CardTypes {
  id: number;
  name: string;
  apr: number;
  balanceTransferOfferDuration: number;
  purchaseOfferDuration: number;
  creditAvailable: number;
}

interface Props {
  userSubmission?: FormTypes;
  hasSubmitted: boolean;
}

const availableCards: CardTypes[] = [
  {
    id: 1,
    name: "Student Life",
    apr: 18.9,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 6,
    creditAvailable: 1200,
  },
  {
    id: 2,
    name: "Anywhere Card",
    apr: 33.9,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 0,
    creditAvailable: 300,
  },
  {
    id: 3,
    name: "Liquid Card",
    apr: 33.9,
    balanceTransferOfferDuration: 12,
    purchaseOfferDuration: 6,
    creditAvailable: 3000,
  },
];

const Cards: React.FC<Props> = ({ userSubmission, hasSubmitted }) => {
  const [isActive, setIsActive] = useState<number[]>([]);

  const checkEligibility = () => {
    if (
      userSubmission?.employmentType === "student" &&
      (userSubmission?.annualIncome as number) >= 16000
    ) {
      return availableCards;
    }
    if (userSubmission?.employmentType === "student") {
      return availableCards.filter(
        (cards) =>
          cards.name === "Student Life" || cards.name === "Anywhere Card"
      );
    }
    if ((userSubmission?.annualIncome as number) >= 16000) {
      return availableCards.filter(
        (cards) =>
          cards.name === "Liquid Card" || cards.name === "Anywhere Card"
      );
    } else
      return availableCards.filter((cards) => cards.name === "Anywhere Card");
  };

  const mappedCards = hasSubmitted ? checkEligibility() : availableCards;

  const totalCreditAvailable = mappedCards
    .filter((card, index) => isActive?.includes(index) && card.creditAvailable)
    .map((card) => card.creditAvailable)
    .reduce((acc, total) => acc + total, 0);

  return (
    <StyledMainContainer>
      {!hasSubmitted && (
        <StyledNav>
          <Link to="/eligible-cards">
            <StyledButton>Check Eligibility</StyledButton>
          </Link>
        </StyledNav>
      )}
      <StyledFormContainer>
        <h1>Available Cards</h1>
        {mappedCards.map((card, index) => (
          <StyledCards
            key={index}
            onClick={() => {
              if (isActive?.includes(index)) {
                setIsActive((current: number[]) => [
                  ...current.slice(index, -1),
                ]);
              } else setIsActive((current: number[]) => [...current, index]);
            }}
          >
            <h2>{card.name}</h2>
            {isActive?.includes(index) && (
              <div>
                <div>{`Apr: ${card.apr}%`}</div>
                <div>{`Balance Transfer Offer Duration: ${card.balanceTransferOfferDuration} months`}</div>
                <div>{`Purchase Offer Duration: ${card.purchaseOfferDuration} months`}</div>
                <div>{`Credit Available: £${card.creditAvailable}`}</div>
              </div>
            )}
          </StyledCards>
        ))}
        {hasSubmitted && isActive.length > 0 && (
          <div>
            <h3>{`Total credit available: £${totalCreditAvailable}`}</h3>
          </div>
        )}
      </StyledFormContainer>
    </StyledMainContainer>
  );
};

export default Cards;
