"use client";

import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";
import { login } from "./Login";
import {
  setTransactionsMessage,
  updateAccountBalance,
  updateShowBank,
} from "../firebase/apiFirebase";
import { useTransferContext } from "../context/TransferContext";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

// ==================== 🌴TYPES ====================
interface PinInputProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
  accountNum: number;
}

// ==================== 🌻MAIN COMPONENT ====================
export default function PinInput({
  setStep,
  amount,
  accountNum,
}: PinInputProps) {
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const router = useRouter();
  const { resetTimer } = useAuth();

  const {
    accountBalance,
    setAccountBalance,
    setShowBank,
    setReloadTransactionMsgFlag,
  } = useTransferContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;

    if (!/^[0-9]$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (index < 3) {
      document.getElementById(`pin-input-${index + 1}`)?.focus();
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace") {
      const newPin = [...pin];

      if (newPin[index]) {
        newPin[index] = "";
      } else if (index > 0) {
        newPin[index - 1] = "";
        document.getElementById(`pin-input-${index - 1}`)?.focus();
      }

      setPin(newPin);
    }

    if (e.key === "Enter" && !pin.includes("")) {
      handleSubmit();
    }
  }

  // ==================== 🧠 BUSINESS LOGIC ====================
  function handleSubmit() {
    const pinValue = pin.join("");

    if (pinValue === login.pin && amount > 9000) {
      setShowBank(false);
      updateShowBank(false);
      return;
    }

    if (pinValue !== login.pin) {
      toast.error("Invalid Pin");
      return;
    }

    const newBalance = accountBalance - amount;

    setAccountBalance(newBalance);
    updateAccountBalance(newBalance);
    generateTransactionMessage();
    setReloadTransactionMsgFlag((v) => !v);
    resetTimer();
    setStep(4);
  }

  function getDate() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getDate()).padStart(2, "0")} 00:00:00`;
  }

  function getReceiver() {
    const map: Record<number, string> = {
      138567491234: "Kuwait Petroleum Corporation (KPC)",
      459230817652: "Zain Group",
      284673291057: "Agility Public Warehousing Company",
      191034578901: "Ahmad Al-Sabah",
      284765193472: "Fatima Al-Mutairi",
      356908213457: "Yusuf Al-Kandari",
    };

    return map[accountNum] ?? "";
  }

  function generateTransactionMessage() {
    setTransactionsMessage({
      id: `TRANS-${Math.floor(Math.random() * 100) + 1}`,
      date: getDate(),
      transactionType: "Bank Withdrawal",
      status: "Debit",
      amount: amount.toFixed(2),
      sender: "null",
      receiver: getReceiver(),
      referenceCode: faker.string.alphanumeric(16),
      accountNumber: "19400216",
      location: "null",
      balanceAfterTransaction: String(accountBalance),
    });
  }

  return (
    <StyledPinInput>
      <h3>Enter PIN</h3>

      <InputContainer>
        {pin.map((value, index) => (
          <input
            key={index}
            id={`pin-input-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </InputContainer>

      <BtnContainer>
        <button onClick={handleSubmit} disabled={pin.includes("")}>
          Submit PIN
        </button>

        <button onClick={() => router.push("/dashboard")}>Cancel</button>
      </BtnContainer>
    </StyledPinInput>
  );
}

//
// ==================== 🌸 STYLED COMPONENTS ====================
//

const StyledPinInput = styled.div`
  width: 25rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.6rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    text-align: center;
    font-size: 2rem;
    width: 4rem;
    height: 5rem;
    border: none;
    border-bottom: 2px solid #d30b29;

    &:focus {
      outline: 3px solid #d30b29;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  button {
    font-family: inherit;
    border: none;
    width: 12rem;
    padding: 1rem;
    font-size: 1.5rem;
    margin-top: 2rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  button:first-child {
    color: white;
    background-color: #d30b29;
  }
`;
