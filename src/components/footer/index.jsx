import React from 'react';
import {
  StyledCopyRight,
  StyledFooter,
  StyledFooterWrapper,
  StyledLink,
  StyledLinkWrapper,
  StyledSocials,
} from './styled';

const Footer = () => (
  <StyledFooter>
    <h1>codecrafts</h1>
    <StyledFooterWrapper>
      <StyledLinkWrapper>
        <h3>Products</h3>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/courses">Courses</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledLinkWrapper>

      <StyledLinkWrapper>
        <h3>Jobs Sites</h3>
        <StyledLink>LinkedIn</StyledLink>
        <StyledLink>TotalJobs</StyledLink>
        <StyledLink>reed</StyledLink>
        <StyledLink>indeed</StyledLink>
        <StyledLink>Job seekers allowance</StyledLink>
      </StyledLinkWrapper>

      <StyledLinkWrapper>
        <h3>idk yet</h3>
        <StyledLink>Home</StyledLink>
        <StyledLink>Courses</StyledLink>
        <StyledLink>About</StyledLink>
        <StyledLink>Pricing</StyledLink>
        <StyledLink>Pricing</StyledLink>
      </StyledLinkWrapper>
    </StyledFooterWrapper>
    <StyledSocials>
      <h3>Follow us on socials</h3>
      {/* <p>Stay up-to-date with our latest news and updates by following us on social media.</p> */}

      <span>
        <a href="https://twitter.com/codecrafts_">
          <ion-icon name="logo-twitter" />
        </a>
        <a href="https://discord.gg/Ks7UxrqBSF">
          <ion-icon name="logo-discord" />
        </a>
        <a href="https://instagram.com/codecrafts_">
          <ion-icon name="logo-instagram" />
        </a>
      </span>
    </StyledSocials>
    <StyledCopyRight>
      CodeCraft &copy;
      {new Date().getFullYear()}. All Rights Reserved.
    </StyledCopyRight>
  </StyledFooter>
);

export default Footer;