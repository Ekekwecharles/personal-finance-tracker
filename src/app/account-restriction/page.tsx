"use client";

import styled from "styled-components";
import Search from "@/components/Search";

const StyledSuspensionPage = styled.div`
  h1 {
    color: #e31837;
    font-size: 2.5rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 1rem;
    width: 20rem;
  }
`;

const Container = styled.div`
  text-align: center;
  font-family: "DM Sans", sans-serif;
  padding: 1rem 6rem;

  @media (max-width: 37.5em) {
    padding: 1rem 2rem;
  }
`;

const Message = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;
`;

const Email = styled.p`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-size: 1.5rem;
`;

export default function SuspensionPage() {
  return (
    <StyledSuspensionPage>
      <Search />
      <Container>
        <h1>Access Temporarily Unavailable</h1>
        <Message>
          Hello,
          <br />
          <b>
            This action cannot be completed because access to your profile is
            currently restricted.
          </b>{" "}
          This application is a personal finance tracking tool, and access may
          be limited due to unusual activity or incomplete information.
          <br />
          <br />
          Please contact support for assistance.
        </Message>

        <Email>
          <strong>Email:</strong>
          <a href="mailto:personalfianance.wecare@gmail.com">
            personalfinance.wecare@gmail.com
          </a>
        </Email>
        <button
          onClick={() => {
            window.location.href = "mailto:personalfianance.wecare@gmail.com";
          }}
        >
          Email Us
        </button>
      </Container>
    </StyledSuspensionPage>
  );
}
