"use client";

import styled from "styled-components";

export default function TrustBanner() {
  return (
    <Wrapper>
      <Text>
        Trusted by millions. <span>Built with security at the core.</span>
      </Text>
    </Wrapper>
  );
}

/* ==================== STYLED COMPONENTS ==================== */

const Wrapper = styled.section`
  padding: 1.5rem 4.5rem;
  background-color: #fafafa;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 61em) {
    padding: 1.2rem 1rem;
  }
`;

const Text = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 1.6rem;
  color: #333;
  text-align: center;
  margin: 0;

  span {
    font-weight: 600;
    color: #000;
  }

  @media (max-width: 37.5em) {
    font-size: 1.4rem;
  }
`;
