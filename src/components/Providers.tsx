"use client";

import { TransferProvider } from "@/context/TransferContext";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <TransferProvider>{children}</TransferProvider>
    </AuthProvider>
  );
}
