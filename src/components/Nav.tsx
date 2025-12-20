"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

function prevent(e: React.MouseEvent) {
  e.preventDefault();
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <StyledNav>
      <NavPages>
        <StyledLink href="/" $active={pathname === "/"}>
          Personal
        </StyledLink>
        <StyledLink href="#" onClick={prevent} $active={false}>
          Small business
        </StyledLink>
        <StyledLink href="#" onClick={prevent} $active={false}>
          Wealth Management
        </StyledLink>
        <StyledLink href="#" onClick={prevent} $active={false}>
          Business & Institutions
        </StyledLink>
        <StyledLink href="#" onClick={prevent} $active={false}>
          Security
        </StyledLink>
        <About href="#" onClick={prevent} $active={false}>
          <img src="/favicon.png" alt="" />
          About Us
        </About>
      </NavPages>

      <NavRight>
        <NavServices>
          <StyledLink href="#" onClick={prevent} $active={false}>
            En español
          </StyledLink>
          <StyledLink href="#" onClick={prevent} $active={false}>
            Contact Us
          </StyledLink>
          <StyledLink href="#" onClick={prevent} $active={false}>
            Help
          </StyledLink>
        </NavServices>

        <PrimaryActions>
          <PrimaryLink href="#">Sign In</PrimaryLink>
          <Separator>|</Separator>
          <PrimaryLink href="#">Open an Account</PrimaryLink>
        </PrimaryActions>
      </NavRight>
    </StyledNav>
  );
}

// ==================== Styled Components ====================
const StyledNav = styled.nav`
  background-color: #f5f5f5;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  padding: 0 4.5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 62.5em) {
    padding: 0 1rem;
    font-size: 1.3rem;
  }

  @media (max-width: 50em) {
    padding: 0 1.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 37.5em) {
    flex-direction: column;
    align-items: stretch;
    /* font-size: 1.1rem; */
    padding: 0 2px;
  }
`;

const NavPages = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-shrink: 1; /* allows font-size to shrink before wrapping */
  white-space: nowrap;
  /* flex-wrap: wrap; */

  @media (max-width: 80em) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 37.5em) {
    gap: 1rem;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  /* flex-wrap: wrap; */
  margin-top: 0;

  @media (max-width: 37.5em) {
    /* flex-direction: column; */
    gap: 1rem;
    align-items: center;
    /* margin-top: 1rem; */
  }
`;

const NavServices = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 37.5em) {
    gap: 1rem;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  border-bottom: 2px solid
    ${({ $active }) => ($active ? "black" : "transparent")};
  padding: 0.4rem 0 0.2rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid black;
  }
`;

const About = styled(StyledLink)`
  display: flex;
  align-items: center;

  img {
    width: 3rem;

    @media (max-width: 37.5em) {
      width: 2rem;
    }
  }
`;

// ==================== Primary Actions ====================
const PrimaryActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  @media (max-width: 37.5em) {
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const PrimaryLink = styled(Link)`
  color: #e31837;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  color: #333;
`;
