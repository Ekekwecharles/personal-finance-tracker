import type { Metadata } from "next";
// import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { openSans, dmSans } from "./fonts";

export const metadata: Metadata = {
  title: "Personal Finance Tracker",
  description:
    "A personal tool for tracking money activity and planning expenses.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${dmSans.variable}`}>
        {/* <StyledComponentsRegistry> */}
        <GlobalStyles />
        <Providers>{children}</Providers>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#012169",
              color: "#fff",
              fontSize: "1.5rem",
              border: "2px solid #c41230",
              fontFamily: "var(--font-open-sans)",
            },
            success: {
              duration: 5000,
            },
          }}
        />
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
