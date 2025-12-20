"use client";

import Link from "next/link";
import styled from "styled-components";

type CardProps = {
  price: string;
  bonus: string;
  annual: string;
  image: string;
  cashRewards: string;
  cashBack: string;
};

// ==================== 🌻Main Component ====================
export default function Card({
  price,
  bonus,
  annual,
  image,
  cashRewards,
  cashBack,
}: CardProps) {
  return (
    <CardContainer>
      <Price>{price}</Price>
      <Bonus>{bonus}</Bonus>
      <Annual>{annual}</Annual>
      <ImageContainer>
        <Image src={image} alt={cashRewards} />
      </ImageContainer>
      <CashRewards>{cashRewards}</CashRewards>
      <CashBack href="/">{cashBack}</CashBack>
    </CardContainer>
  );
}

//
// ==================== 🌸STYLED COMPONENTS ====================
//

const CardContainer = styled.div`
  text-align: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`;

const Price = styled.div`
  color: #e31837;
  font-size: 6.5rem;
  font-family: "Arsenal", sans-serif;
  line-height: 0.7;

  @media (max-width: 75.6em) {
    font-size: 5rem;
  }

  @media (max-width: 56.25em) {
    font-size: 4rem;
  }

  @media (max-width: 37.5em) {
    font-size: 3.2rem;
  }
`;

const Bonus = styled.div`
  color: #e31837;
  margin-top: 1rem;
`;

const Annual = styled.div`
  font-weight: 600;
  margin: 1rem 0 0.5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 37.5em) {
    width: 70%;
    display: inline-block;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const CashRewards = styled.div`
  margin: 1rem 0;
`;

const CashBack = styled(Link)`
  font-size: 1.2rem;
  display: inline-block;
  padding: 0 2rem;
  text-decoration: none;
  color: #0053c2;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
