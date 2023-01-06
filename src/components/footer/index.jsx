import React from 'react';
import { StyledCopyRight, StyledFooterWrapper, StyledLink, StyledLinkWrapper } from './styled';

const Footer = () => (
  <>
    <StyledFooterWrapper>
      <StyledLinkWrapper>
        <h3>Internal</h3>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/courses">Courses</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
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
    <StyledCopyRight>CodeCraft &copy; {new Date().getFullYear()}. All Rights Reserved.</StyledCopyRight>
  </>
);

export default Footer;
