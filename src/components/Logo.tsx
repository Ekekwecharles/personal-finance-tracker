"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

// ==================== 🌻MAIN COMPONENT ====================
export default function Logo() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // Navigate to home page
  };

  return (
    <StyledLogo onClick={handleClick}>
      PERSONAL FINANCE
      <img src="/favicon.png" alt="Personal Finance Logo" />
    </StyledLogo>
  );
}

//
// ==================== 🌸 STYLED COMPONENTS ====================
//

const StyledLogo = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  color: #030368;
  font-family: "DM Sans", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  img {
    height: 4rem;

    @media (max-width: 600px) {
      height: 3rem;
    }
  }
`;
