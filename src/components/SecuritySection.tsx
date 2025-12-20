"use client";

import styled from "styled-components";
import { FaShieldAlt, FaLock, FaClock } from "react-icons/fa";

export default function SecuritySection() {
  return (
    <Section>
      <Title>Your security comes first</Title>
      <Features>
        <Feature>
          <Icon>
            <FaLock />
          </Icon>
          <Text>256-bit encryption</Text>
        </Feature>

        <Feature>
          <Icon>
            <FaShieldAlt />
          </Icon>
          <Text>Multi-factor authentication</Text>
        </Feature>

        <Feature>
          <Icon>
            <FaClock />
          </Icon>
          <Text>Fraud monitoring 24/7</Text>
        </Feature>
      </Features>
    </Section>
  );
}

//
// ==================== 🌸 STYLED COMPONENTS ====================
//
const Section = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  font-family: "DM Sans", sans-serif;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #012169;

  @media (max-width: 56.25em) {
    font-size: 2rem;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 56.25em) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #e31837;

  @media (max-width: 56.25em) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: #343a40;
  font-weight: 500;

  @media (max-width: 56.25em) {
    font-size: 1.4rem;
  }
`;
