"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Transaction } from "../services/transactions";

interface TransferContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;

  accountBalance: number;
  setAccountBalance: Dispatch<SetStateAction<number>>;

  showBank: boolean;
  setShowBank: Dispatch<SetStateAction<boolean>>;

  transactionMessages: Record<string, Transaction[]>;
  setTransactionMessages: Dispatch<
    SetStateAction<Record<string, Transaction[]>>
  >;

  reloadTransactionMsgFlag: boolean;
  setReloadTransactionMsgFlag: Dispatch<SetStateAction<boolean>>;
}

interface TransferProviderProps {
  children: ReactNode;
}

const TransferContext = createContext<TransferContextType | null>(null);

function TransferProvider({ children }: TransferProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [showBank, setShowBank] = useState<boolean>(true);
  const [transactionMessages, setTransactionMessages] = useState<
    Record<string, Transaction[]>
  >({});
  const [reloadTransactionMsgFlag, setReloadTransactionMsgFlag] =
    useState<boolean>(false);

  const value = useMemo(
    () => ({
      loading,
      setLoading,
      accountBalance,
      setAccountBalance,
      showBank,
      setShowBank,
      transactionMessages,
      setTransactionMessages,
      reloadTransactionMsgFlag,
      setReloadTransactionMsgFlag,
    }),
    [
      loading,
      accountBalance,
      showBank,
      transactionMessages,
      reloadTransactionMsgFlag,
    ]
  );

  return (
    <TransferContext.Provider value={value}>
      {children}
    </TransferContext.Provider>
  );
}

function useTransferContext() {
  const context = useContext(TransferContext);
  if (!context) {
    throw new Error(
      "useTransferContext must be used within a TransferProvider"
    );
  }
  return context;
}

export { TransferProvider, useTransferContext };
