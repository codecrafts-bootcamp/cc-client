import React from 'react';
import { StyledFlexWrap } from '../../common/styles';
import IconInfo from '../../components/IconInfo';
import Slider from '../../components/Slider';
import { infoIconData, sliderContent, statsData } from './messages';
import { StyledContentWrapper, StyledInfoWrapper, StyleHome } from './styled';

function Home() {
  return (
    <StyleHome>
      <Slider sliderContent={sliderContent} />

      <StyledContentWrapper>
        <StyledInfoWrapper>
          <h1>Creative Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, ex accusamus error, amet veniam
            quis, quidem ullam impedit obcaecati fuga! Ipsa esse eaque iure doloribus nulla distinctio dicta blanditiis?
          </p>
        </StyledInfoWrapper>

        <StyledFlexWrap>
          {infoIconData.map((iconData) => (
            <IconInfo {...iconData} />
          ))}
        </StyledFlexWrap>
      </StyledContentWrapper>
      <StyledFlexWrap className="green-content" bgColor="#00c874">
        {statsData.map((iconData) => (
          <IconInfo {...iconData} />
        ))}
      </StyledFlexWrap>
    </StyleHome>
  );
}
export default Home;
