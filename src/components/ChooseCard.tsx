"use client";

import styled from "styled-components";
import Login from "./Login";
import Card from "./Card";

// ==================== 🌻 Main Component ====================
export default function ChooseCard() {
  return (
    <ChooseCardSection>
      <LoginWrapper>
        <Login />
      </LoginWrapper>

      <CardsSection>
        <h1>Choose the card that works for you</h1>

        <CardsGrid>
          <Card
            price="$200"
            bonus="online bonus offer"
            annual="No annual fee"
            image="mixedcolorcard.jpg"
            cashRewards="Customized Cash Rewards"
            cashBack="3% cash back in the category of your choice >"
          />

          <Card
            price="$200"
            bonus="online bonus offer"
            annual="No annual fee"
            image="graycard.jpg"
            cashRewards="Unlimited Cash Rewards"
            cashBack="Unlimited 1.5% cash back on all purchases >"
          />

          <Card
            price="25,000"
            bonus="online bonus points offer"
            annual="No annual fee"
            image="blackcard.jpg"
            cashRewards="Travel Rewards"
            cashBack="Unlimited 1.5 points for every $1 spent on all purchases >"
          />

          <Card
            price="0%"
            bonus="Intro APR offer"
            annual="No annual fee"
            image="greencard.jpg"
            cashRewards="PersonalFinanceCard®"
            cashBack="Intro APR offer for 18 billing cycles >"
          />
        </CardsGrid>
      </CardsSection>
    </ChooseCardSection>
  );
}

//
// ==================== 🌸 STYLED COMPONENTS ====================
//

const ChooseCardSection = styled.section`
  display: grid;
  grid-template-columns: 32rem 1fr;
  gap: 5rem;
  padding: 2rem 4.5rem;
  font-family: "DM Sans", sans-serif;
  align-items: start;

  /* Tablet */
  @media (max-width: 75em) {
    grid-template-columns: 28rem 1fr;
    gap: 3rem;
    padding: 2rem;
  }

  /* Mobile */
  @media (max-width: 56.25em) {
    grid-template-columns: 1fr;
  }
`;

const LoginWrapper = styled.aside`
  position: sticky;
  top: 2rem;

  @media (max-width: 56.25em) {
    position: static;
  }
`;

const CardsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    font-size: 3.6rem;
    font-weight: 400;

    @media (max-width: 56.25em) {
      font-size: 2.8rem;
    }
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;

  /* Laptop */
  @media (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`;
