"use client";

import styled from "styled-components";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlinePinterest } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const StyledFooter = styled.div`
  text-align: center;
  background-color: #012169;
  color: white;
  font-family: "DM Sans", sans-serif;
  padding: 4rem 10rem;

  @media (max-width: 37.5em) {
    padding: 4rem;
  }

  h3 {
    margin: 2.5rem 0 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 0.7rem;
    font-size: 1.4rem;
  }

  /* p:nth-last-child(2) {
    margin-bottom: 2rem;
  } */
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  a::after {
    content: "|";
    margin-left: 1rem;
    text-decoration: none;
  }

  a:last-child::after {
    content: "";
  }
`;

const StyledFooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLinks>
        <StyledFooterLink href="/">Locations</StyledFooterLink>
        <StyledFooterLink href="/">Contact</StyledFooterLink>
        <StyledFooterLink href="/">Support</StyledFooterLink>
        <StyledFooterLink href="/">Accessibility</StyledFooterLink>
        <StyledFooterLink href="/">Privacy Policy</StyledFooterLink>
        <StyledFooterLink href="/">Children's Privacy</StyledFooterLink>
        <StyledFooterLink href="/">Security</StyledFooterLink>
        <StyledFooterLink href="/">Terms of Use</StyledFooterLink>
        <StyledFooterLink href="/">Your Privacy Choices</StyledFooterLink>
        <StyledFooterLink href="/">Site Map</StyledFooterLink>
        <StyledFooterLink href="/">Careers</StyledFooterLink>
        <StyledFooterLink href="/">Feedback</StyledFooterLink>
        <StyledFooterLink href="/">
          Track your spending and activity
        </StyledFooterLink>
        <StyledFooterLink href="/">
          Organize your financial records
        </StyledFooterLink>
        <StyledFooterLink href="/">Personal finance dashboard</StyledFooterLink>
      </FooterLinks>

      <h3>Connect with Personal Finance</h3>
      <SocialLinks>
        <SocialLink
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialInstagram />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlinePinterest />
        </SocialLink>
        <SocialLink
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoYoutube />
        </SocialLink>
      </SocialLinks>

      <p>© 2024 Personal Finance Tracker. All rights reserved.</p>
      <p>This application is a personal management tool.</p>
      <p>It does not provide financial or banking services.</p>
    </StyledFooter>
  );
}
