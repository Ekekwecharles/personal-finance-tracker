"use client";

import { BsEyeSlash } from "react-icons/bs";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AccountCards from "@/components/AccountCards";
import TransferCards from "@/components/TransferCards";
import BillPaymentCards from "@/components/BillPaymentCards";
import LifestyleCards from "@/components/LifestyleCards";
import ChequesCards from "@/components/ChequesCards";
import Link from "next/link";
import { getAccountBalance } from "@/firebase/apiFirebase";
import { useTransferContext } from "@/context/TransferContext";
import { useAuth } from "@/context/AuthContext";
import { Transaction as TransactionType } from "@/services/transactions";
import Transaction from "@/components/Transaction";

// ==================== 🌻Main Component ====================
export default function BankingHome() {
  const [showBal, setShowBal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("account");
  const [lastTransaction, setLastTransaction] = useState<
    [string, TransactionType[]]
  >(["", []]);

  const { accountBalance, setAccountBalance, transactionMessages } =
    useTransferContext();
  const { resetTimer } = useAuth();

  useEffect(() => {
    function getLastTransaction() {
      const entries = Object.entries(transactionMessages);
      setLastTransaction(entries.length ? entries[0] : ["", []]);
    }

    getLastTransaction();
  }, [transactionMessages]);

  useEffect(() => {
    async function getbalance() {
      const bal = await getAccountBalance();
      setAccountBalance(bal as number);
    }

    getbalance();
  }, [setAccountBalance]);

  return (
    <StyledBankingHome>
      <Grid>
        <AccountContainer>
          <p>Regular</p>
          <AccountNumber>1199181032</AccountNumber>
          <div>
            <Premier>Premier Savings</Premier>
          </div>
          <AccountBalance>
            <p>$</p>
            <p>{showBal ? accountBalance.toLocaleString() : "*******"}</p>

            <EyeBtn onClick={() => setShowBal((value) => !value)}>
              <BsEyeSlash />
            </EyeBtn>
          </AccountBalance>

          <Flex>
            <div>
              <SvgContainer>
                {/* <TbReceipt /> */}
                <HiOutlineReceiptRefund />
              </SvgContainer>{" "}
              Pay bills
            </div>

            <TransferBtn>
              <Link href="/dashboard/record-entry" onClick={resetTimer}>
                <SvgContainer>
                  <IoArrowUpCircleOutline style={{ fontSize: "3.2rem" }} />
                </SvgContainer>
              </Link>
              Transfer
            </TransferBtn>
          </Flex>
        </AccountContainer>
        <RecentTransfer>
          <p>Most Recent Records</p>
          <Transaction date={lastTransaction[0]} value={lastTransaction[1]} />
        </RecentTransfer>
      </Grid>

      <Options>
        <Option
          onClick={() => setActiveCategory("account")}
          $isActive={activeCategory === "account"}
        >
          Account
        </Option>
        <Option
          onClick={() => setActiveCategory("transfers")}
          $isActive={activeCategory === "transfers"}
        >
          Records
        </Option>
        <Option
          onClick={() => setActiveCategory("billPayments")}
          $isActive={activeCategory === "billPayments"}
        >
          Bill Payments
        </Option>
        <Option
          onClick={() => setActiveCategory("lifestyle")}
          $isActive={activeCategory === "lifestyle"}
        >
          lifestyle
        </Option>
        <Option
          onClick={() => setActiveCategory("chequesCash")}
          $isActive={activeCategory === "chequesCash"}
        >
          Cards
        </Option>
      </Options>

      <CardContainer>
        {activeCategory === "account" && <AccountCards />}
        {activeCategory === "transfers" && <TransferCards />}
        {activeCategory === "billPayments" && <BillPaymentCards />}
        {activeCategory === "lifestyle" && <LifestyleCards />}
        {activeCategory === "chequesCards" && <ChequesCards />}
      </CardContainer>
    </StyledBankingHome>
  );
}

//
// ==================== 🌸STYLED COMPONENTS ====================
//

const StyledBankingHome = styled.div`
  padding: 3rem 6rem;

  @media (max-width: 37.5em) {
    padding: 3rem 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 3rem;

  @media (max-width: 37.5em) {
    gap: 1.5rem;
    grid-template-columns: 1fr;
  }
`;

const AccountContainer = styled.div`
  background-color: #e31837;
  border-radius: 25px;
  padding: 2.5rem;
  color: white;
  font-family: "DM Sans", sans-serif;
  font-size: 1.7rem;
`;

const AccountNumber = styled.div`
  margin-top: 0.5rem;
  font-weight: bolder;
`;

const Premier = styled.div`
  background-color: #720616;
  padding: 0.7rem 1.5rem;
  border-radius: 15px;
  font-size: 1.4rem;
  margin-top: 1.1rem;
`;

const EyeBtn = styled.button`
  border: none;
  background: none;
  margin-left: 2.5rem;

  svg {
    fill: white;
    font-size: 1.5rem;
  }
`;

const AccountBalance = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.1rem;
  margin-top: 3rem;

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
    font-size: 1.3rem;
  }
`;

const SvgContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;

  svg {
    stroke: #012047;
    font-size: 3.2rem;
  }
`;

const RecentTransfer = styled.div`
  background-color: white;
  align-self: start;
  padding: 2rem;
  border-radius: 20px;
  font-family: "DM Sans", sans-serif;
  font-size: 1.3rem;

  p {
    margin-bottom: 1rem;
    font-weight: bolder;
  }

  div {
    /* height: 4rem; */
    /* background-color: #faf5f5; */
    /* margin-top: 1.1rem; */
    /* border-radius: 10px; */
  }
`;

const Options = styled.div`
  margin-top: 5rem;
  background-color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
  font-family: "DM Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: bolder;
  color: #d30b29;
  /* color: #f78092; */
  flex-wrap: wrap;

  @media (max-width: 37.5em) {
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
  }

  div {
    width: 15rem;
    padding: 1rem;
    cursor: pointer;
    /* border: 1px solid red; */

    @media (max-width: 37.5em) {
      width: 14rem;
    }
  }
`;

const TransferBtn = styled.div`
  cursor: pointer;
`;

const Option = styled.div<{ $isActive: boolean }>`
  background-color: ${(props) => (props.$isActive ? "#eec8cd" : "")};

  display: flex;
  justify-content: center;
  border-radius: 12px;
`;

const CardContainer = styled.div``;
