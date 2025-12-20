"use client";

import { useState } from "react";
import styled from "styled-components";
import { getSuspendedStatus } from "../firebase/apiFirebase";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

interface TokenInputProps {
  generatedToken: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

// ==================== 🌻MAIN COMPONENT ====================
export default function TokenInput({
  generatedToken,
  setStep,
}: TokenInputProps) {
  const [token, setToken] = useState<string[]>(["", "", "", "", "", ""]);
  const router = useRouter();
  const { logout } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (!/^[0-9]$/.test(value)) return; // Only allow digits

    const newToken = [...token];
    newToken[index] = value;
    setToken(newToken);

    // Move to next input
    if (index < 5 && value !== "") {
      const nextInput = document.getElementById(`token-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newToken = [...token];

      if (newToken[index] !== "") {
        newToken[index] = "";
      } else if (index > 0) {
        newToken[index - 1] = "";
        document.getElementById(`token-input-${index - 1}`)?.focus();
      }

      setToken(newToken);
    }

    // Auto-submit on Enter
    if (e.key === "Enter" && !token.includes("")) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const isSuspended = await getSuspendedStatus();
    const tokenValue = parseInt(token.join(""), 10);

    if (tokenValue === generatedToken) {
      if (isSuspended) {
        logout();
        router.push("/account-restriction");
        return;
      }
      setStep(3);
    } else {
      toast.error("Invalid Acess Code");
    }
  };

  return (
    <StyledTokenInput>
      <h3>Enter Access Code</h3>

      <InputContainer>
        {token.map((value, index) => (
          <input
            key={index}
            id={`token-input-${index}`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </InputContainer>

      <BtnContainer>
        <button onClick={handleSubmit} disabled={token.includes("")}>
          Submit Code
        </button>
        <button onClick={() => setStep(1)}>Cancel</button>
      </BtnContainer>
    </StyledTokenInput>
  );
}

//
// ==================== 🌸 STYLED COMPONENTS ====================
//

const StyledTokenInput = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 0.6rem;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  input {
    text-align: center;
    font-size: 1.8rem;
    width: 45px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #d30b29;

    &:focus {
      outline: 3px solid #d30b29;
    }

    @media (max-width: 768px) {
      width: 35px;
      font-size: 1.5rem;
      height: 45px;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 220px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  button {
    font-family: inherit;
    border: none;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  button:first-child {
    color: white;
    background-color: #d30b29;
  }
`;
