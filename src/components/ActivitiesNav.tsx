"use client";

import Link from "next/link";
import styled from "styled-components";

// reusable prevent function
function prevent(e: React.MouseEvent) {
  e.preventDefault();
}

// ==================== 🌻 Main Component ====================
export default function ActivitiesNav() {
  return (
    <NavPages>
      <StyledLink href="/checking" onClick={prevent}>
        Checking
      </StyledLink>

      <StyledLink href="/savings" onClick={prevent}>
        Savings & CDs
      </StyledLink>

      <StyledLink href="/credit-cards" onClick={prevent}>
        Credit Cards
      </StyledLink>

      <StyledLink href="/home-loans" onClick={prevent}>
        Home Loans
      </StyledLink>

      <StyledLink href="/auto-loans" onClick={prevent}>
        Auto Loans
      </StyledLink>

      <StyledLink href="/investing" onClick={prevent}>
        Investing
      </StyledLink>

      <StyledLinkFlex href="/better-money-habits" onClick={prevent}>
        Better Money Habits <span>&reg;</span>
      </StyledLinkFlex>
    </NavPages>
  );
}

//
// ==================== 🌸 STYLED COMPONENTS ====================
//

const NavPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  padding: 0 4.5rem;
  font-family: "DM Sans", sans-serif;

  @media (max-width: 61em) {
    padding: 0 1rem;
  }

  @media (max-width: 56.25em) {
    font-size: 1rem;
  }

  @media (max-width: 37.5em) {
    gap: 1rem;
    font-size: 0.75rem;
    padding: 0 0.5rem;
  }

  span {
    font-size: 2rem;
    margin-top: 0.1rem;

    @media (max-width: 56.25em) {
      font-size: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  border-bottom: 2px solid transparent;
  padding: 0 0 1rem;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 56.25em) {
    padding: 0 0 0.5rem;
  }

  &:hover {
    border-bottom: 2px solid black;
  }
`;

const StyledLinkFlex = styled(StyledLink)`
  display: flex;
  align-items: flex-start;
`;
