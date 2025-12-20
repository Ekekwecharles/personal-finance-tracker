"use client";

import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import { useRouter } from "next/navigation";

// ==================== 🌻MAIN COMPONENT ====================
export default function BackBtn() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/dashboard");
  };

  return (
    <StyledBackBtn onClick={handleBack}>
      <IoIosArrowBack />
      Back
    </StyledBackBtn>
  );
}

//
// ==================== 🌸 STYLED COMPONENTS ====================
//

const StyledBackBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: #e31837;
  border: none;
  background: none;
  cursor: pointer;
  gap: 0.5rem;

  svg {
    font-size: 1.6rem;
    color: black;
  }

  &:hover {
    opacity: 0.8;
  }
`;
