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
  <>
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledLinkWrapper>
          <h3>Internal</h3>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/courses">Courses</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/pricing">Pricing</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledLinkWrapper>

        <StyledLinkWrapper>
          <h3>Jobs</h3>
          <StyledLink>LinkedIn</StyledLink>
          <StyledLink>TotalJobs</StyledLink>
          <StyledLink>reed</StyledLink>
          <StyledLink>indeed</StyledLink>
        </StyledLinkWrapper>

        <StyledLinkWrapper>
          <h3>idk yet</h3>
          <StyledLink>Home</StyledLink>
          <StyledLink>Courses</StyledLink>
          <StyledLink>About</StyledLink>
          <StyledLink>Pricing</StyledLink>
        </StyledLinkWrapper>
      </StyledFooterWrapper>
    </StyledFooter>
    <StyledSocials>
      <h3>Follow Us On Socials</h3>
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
    <StyledCopyRight>CodeCraft &copy; {new Date().getFullYear()}. All Rights Reserved.</StyledCopyRight>
  </>
);

export default Footer;
