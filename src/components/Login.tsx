"use client";

import styled from "styled-components";
import { GrSchedule } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { getPassword } from "../firebase/apiFirebase";
import { allowedProfiles } from "../utils/profile";

export const login = {
  pin: "7298",
};

// ==================== 🌻Main Component ====================
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [savedPassword, setSavedPassword] = useState("");

  const { setProfile, setIsAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(function () {
    async function getpassword() {
      if (!navigator.onLine) {
        setNetworkError(true);
        return;
      }

      try {
        const password = await getPassword();
        setSavedPassword(password!);
      } catch (error) {
        setNetworkError(true);
      }
    }

    getpassword();
  }, []);

  // Checking network
  useEffect(() => {
    function updateNetworkStatus() {
      setNetworkError(!navigator.onLine);
    }

    updateNetworkStatus(); // check on mount

    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    return () => {
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);
    };
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // router.push("/dashboard");
    if (!username && !password) return;

    if (networkError) {
      setError(false);
      return;
    }

    const profile = allowedProfiles.find(
      (user) => user.email === username.trim()
    );

    if (!profile || password.trim() !== savedPassword) {
      setError(true);
      return;
    }

    setProfile(profile);
    setLoading(true);

    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false); // Hide loader
      router.push("/dashboard");
    }, 6000); // 6-seconds delay
  }

  return (
    <StyledLoginForm>
      <LoginForm onSubmit={handleLogin}>
        <Box>
          {networkError && (
            <LoginError>
              <FaExclamationTriangle
                style={{
                  marginRight: "0.5rem",
                  fill: "yellow",
                  fontSize: "1.4rem",
                }}
              />
              <p>No internet connection. Please check your network.</p>
            </LoginError>
          )}

          {error && !networkError && (
            <LoginError>
              <FaExclamationTriangle
                style={{
                  marginRight: "0.5rem",
                  fill: "yellow",
                  fontSize: "1.4rem",
                }}
              />
              <p>Incorrect login details. Try again.</p>
            </LoginError>
          )}

          <input
            type="text"
            placeholder="User ID"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (error) setError(false);
            }}
          />
          <PasswordContainer>
            <input
              // type="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
            />
            <EyeIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </PasswordContainer>
          <CheckBoxContainer>
            <input type="checkbox" id="save-user" />
            <label htmlFor="save-user">Save User Id</label>
          </CheckBoxContainer>
          <LoginBtn>
            {loading ? <div className="loader"></div> : "Log in"}
          </LoginBtn>
          <p>Forgot ID/Password?</p>
          <Flex>
            <p>Security & Help</p>
            <p>Enroll</p>
          </Flex>
        </Box>
        <OpenAccountBtn>Open an Account</OpenAccountBtn>
      </LoginForm>

      <LocateAtm>
        <p>
          <FaLocationDot /> Find your closest financial center or ATM
        </p>
        <p>
          <GrSchedule /> Schedule an Appointment
        </p>
      </LocateAtm>
    </StyledLoginForm>
  );
}

//
// ==================== 🌸STYLED COMPONENTS ====================
//

const StyledLoginForm = styled.div`
  color: white;
  font-family: "DM Sans", sans-serif;

  p {
    font-size: 1.5rem;
  }
  svg {
    fill: white;
    stroke: white;
    font-size: 2rem;
  }
`;

const LoginForm = styled.form`
  background-color: #e31837;

  input[type="text"],
  input[type="password"] {
    width: 100%;
    border: 1px solid #646464;
    border-radius: 4px;
    padding: 0.9rem 1rem;
    font-size: 1.4rem;
    color: #333;
    font-weight: bolder;

    &:focus {
      outline: none;
      border-color: #0053c2;
    }

    &::placeholder {
      font-weight: bold;
      opacity: 0.9;
    }
  }

  input[type="checkbox"] {
    width: 3rem;
    height: 3rem;
    /* display: inline-block; */
    border: 1px solid yellow;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
  font-size: 1.4rem;
`;

const LoginBtn = styled.button`
  background: none;
  border: 1px solid white;
  padding: 1rem 0;
  border-radius: 100px;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;

  &:hover {
    background-color: #012169;
    border: 1px solid #0053c2;
  }
`;

const OpenAccountBtn = styled.button`
  background-color: #c41230;
  width: 100%;
  color: white;
  border: none;
  padding: 1rem 0;
  font-family: inherit;
`;

const Box = styled.div`
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  p:last-child {
    margin-right: 3.5rem;
  }
`;

const LocateAtm = styled.div`
  margin-top: 1.5rem;

  p {
    background-color: #0073cf;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  p:last-child {
    background-color: #0053c2;
  }
`;

// const LoginError = styled.div`
//   text-align: center;
//   font-size: 1.4rem;
// `;

const LoginError = styled.div`
  text-align: center;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: yellow; /* optional, matches the icon */

  p {
    line-height: 0;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding-right: 40px; /* Leave space for the icon */
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 15px;
  cursor: pointer;
  font-size: 20px;
  display: flex;

  svg {
    fill: #e31837;

    &:hover {
      fill: #c41230;
    }
  }
`;

// Bank Name: Personal Finance
// Bank Address: 123 Main Street, Charlotte, NC, USA
// Account Holder Name: Sergey Kosenko
// Routing Number: 021000322
// Account Number: 1122334455
// SWIFT/BIC Code: BOFAUS3N
