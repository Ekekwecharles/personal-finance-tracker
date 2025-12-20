"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

import { GrHomeRounded } from "react-icons/gr";
import { FaUserPlus } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { TbReceipt2 } from "react-icons/tb";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { PiHandWavingFill, PiBellSimpleRingingFill } from "react-icons/pi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import { useAuth } from "@/context/AuthContext";
import { useTransferContext } from "@/context/TransferContext";
import { getShowBank } from "@/firebase/apiFirebase";
import { getGroupedTransactions } from "@/services/transactions";
import Logo from "@/components/Logo";

// ==================== 🌻Main Component ====================
export default function BankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { logout, startTimer, timeLeft, profile } = useAuth();
  const {
    setTransactionMessages,
    reloadTransactionMsgFlag,
    showBank,
    setShowBank,
  } = useTransferContext();

  const [mobileOpen, setMobileOpen] = useState(false);
  // const [showMobileNav, setShowMobileNav] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  /* Close sidebar on outside click (mobile) */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!sidebarRef.current) return;

      if (!sidebarRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [mobileOpen]);

  /* Fetch transactions */
  useEffect(() => {
    getGroupedTransactions().then(setTransactionMessages);
  }, [reloadTransactionMsgFlag, setTransactionMessages]);

  /* Bank violation check */
  useEffect(() => {
    getShowBank().then((val) => setShowBank(val!));
  }, [setShowBank]);

  /* Start inactivity timer */
  useEffect(() => {
    startTimer();
  }, []);

  /* Redirect instead of <Navigate /> */
  useEffect(() => {
    if (!showBank) {
      router.replace("/international-transaction-violation");
    }
  }, [showBank, router]);

  if (!showBank) return null;

  return (
    <BankingContainer>
      <Sidebar ref={sidebarRef} open={mobileOpen}>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <BankingNav>
          <NavItem
            $active={pathname === "/dashboard"}
            onClick={() => router.push("/dashboard")}
          >
            <GrHomeRounded /> Home
          </NavItem>

          <NavItem
            $active={pathname.includes("saved-details")}
            onClick={() => router.push("/dashboard/saved-details")}
          >
            <FaUserPlus /> Saved Details
          </NavItem>

          <NavItem
            $active={pathname.includes("records")}
            onClick={() => router.push("/dashboard/records")}
          >
            <TransactionsIcon $active={pathname.includes("records")} />
            Records
          </NavItem>

          <NavItem
            $active={pathname.includes("settings")}
            onClick={() => router.push("/dashboard/settings")}
          >
            <IoSettingsSharp /> Settings
          </NavItem>

          <NavItem onClick={logout} className="logOutBtn">
            <IoLogOut /> Logout
          </NavItem>
        </BankingNav>
      </Sidebar>

      <Main>
        <Header>
          <Hello>
            Hello,
            <div>
              <span>{profile?.name}</span>{" "}
              <PiHandWavingFill style={{ fill: "#e31837", fontSize: "3rem" }} />
            </div>
          </Hello>

          {/* <div onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </div> */}
          <Profile>
            <PiBellSimpleRingingFill style={{ fontSize: "2rem" }} />

            {/* <NameAbbr>SK</NameAbbr> */}
            <ProfilePicsContainer>
              <ProfilePics src={profile?.image} />
            </ProfilePicsContainer>
            <NameEmailContainer>
              <div>{profile?.fullName}</div>
              <div>{profile?.email}</div>
            </NameEmailContainer>

            <MobileNav
              onClick={(e) => {
                e.stopPropagation();
                setMobileOpen((open) => !open);
              }}
            >
              {mobileOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </MobileNav>
          </Profile>
        </Header>

        <OutletContainer>{children}</OutletContainer>

        <TimerDisplay>
          <h4>
            For your security, you will be logged out after 8 minutes of
            inactivity.
          </h4>
          <p
            style={{
              display: "flex",
              gap: "2px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaRegClock style={{ fill: "#e31837" }} />
            Time left: {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </p>
        </TimerDisplay>
      </Main>
    </BankingContainer>
  );
}

//
// ==================== 🌸STYLED COMPONENTS ====================
//

const BankingContainer = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  height: 100vh;
  position: relative;

  @media (max-width: 56.25em) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div<{ open: boolean }>`
  padding: 2rem;

  @media (max-width: 56.25em) {
    position: absolute;
    top: 0;
    left: 0;
    width: 22rem;
    height: 100%;
    background: white;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease;
    z-index: 10;
  }
`;

const LogoContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  cursor: pointer;

  div {
    font-size: 1.4rem;
  }

  img {
    width: 3rem;
    height: auto;

    @media (max-width: 37.5em) {
      width: 2rem;
    }
  }
`;

const Main = styled.div`
  background: #faf5f5;
  display: flex;
  flex-direction: column;
`;

const OutletContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Header = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 4rem 6rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 37.5em) {
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

const BankingNav = styled.nav`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 3rem;
  font-size: 1.5rem;
`;

const NavItem = styled.div<{ $active?: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#e31837" : "gray")};
  font-weight: bold;

  svg {
    fill: ${({ $active }) => ($active ? "#e31837" : "gray")};
    /* stroke: ${({ $active }) => ($active ? "#e31837" : "gray")}; */
    font-size: 3rem;
  }

  &.logOutBtn {
    svg {
      fill: #f3526a;
    }
  }
`;

const TransactionsIcon = styled(TbReceipt2)<{ $active: boolean }>`
  stroke: ${({ $active }) => ($active ? "#b80c26" : "#4e4e4e")};
  margin-left: -3px;
`;

const Hello = styled.div`
  font-size: 2rem;
  color: gray;
  display: flex;
  gap: 0.7rem;
  align-items: center;

  @media (max-width: 37.5em) {
    gap: 2px;
    font-size: 1.5rem;
    flex-wrap: wrap;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-weight: bolder;
    color: #252525;
    letter-spacing: 0.2rem;

    @media (max-width: 37.5em) {
      letter-spacing: 0.1rem;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 37.5em) {
    gap: 0.5rem;
  }
`;

const ProfilePicsContainer = styled.div`
  border: 2px solid #d30b29;
  height: 5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const ProfilePics = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
`;

const NameEmailContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 37.5em) {
    gap: 0.3rem;
  }

  div:first-child {
    font-weight: bolder;
    letter-spacing: 1px;
  }

  div:last-child {
    color: gray;
    font-weight: bolder;
    font-size: 1.2rem;
  }
`;

const MobileNav = styled.div`
  display: none;
  margin: 0 2rem;
  cursor: pointer;

  svg {
    font-size: 3rem;
  }

  @media (max-width: 56.25em) {
    display: block;
  }
`;

const TimerDisplay = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1rem;
  font-family: "Roboto", sans-serif;
  background: #faf5f5;
  width: 100%;

  h4 {
    font-size: 1rem;
    color: #333; /* Neutral dark gray */
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #e31837; /* Bright red for urgency */
    margin: 0;
    font-weight: bolder;
    margin-bottom: 5px;
  }
`;
