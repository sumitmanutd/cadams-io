/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import 'typeface-dosis';
import 'typeface-work-sans';
import 'typeface-cabin-condensed';
import 'typeface-cantata-one';

import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation, GlideIn, GlideInDelayed } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors, fonts } from '../../tailwind';
import triangle from '../images/triangle.svg';
import headshot from '../images/headshot.jpg';

import hcpLogo from '../images/hcp-logo.jpg';
import lieuuLogo from '../images/lieuu-logo.jpg';
import hcpScreen from '../images/hcp-screen.jpg';
import lieuuScreen from '../images/lieuu-screen.jpg';

import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-brand text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-sans text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s ease-in-out infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 60vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-col justify-center items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-32 xl:h-48')};
`;

const AboutSub = styled.span`
  ${tw('text-white font-sans pt-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans max-w-xl pt-6 text-center')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const theme = createMuiTheme({
  typography: {
    fontFamily: fonts.sans.join(','),
  },
});

const Index = () => (
  <React.Fragment>
    <SEO />
    <MuiThemeProvider theme={theme}>
      <Parallax pages={5}>
        <Divider speed={0.2} offset={0}>
          <UpDown>
            <SVG icon="cloud" className={hidden} width={48} stroke={colors['blue-light']} left="10%" top="20%" />
            <SVG icon="phone" width={48} stroke={colors['indigo-light']} left="60%" top="70%" />
            <SVG icon="code" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="mac" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
            <SVG icon="cloud" width={12} stroke={colors.white} left="90%" top="50%" />
            <SVG icon="wifi" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
            <SVG icon="cloud" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
            <SVG icon="content" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="fav" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
          <SVG icon="wifi" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
          <SVG icon="content" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
          <SVG icon="content" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
          <SVG icon="cloud" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
          <SVG icon="wifi" width={64} fill={colors.green} left="95%" top="5%" />
          <SVG icon="world" className={hidden} width={64} fill={colors.purple} left="20%" top="95%" />
          <SVG icon="code" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
          <SVG icon="code" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
        </Divider>
        <Content speed={0.4} offset={0}>
          <Hero>
            <GlideIn>
              <BigTitle>Chase Adams</BigTitle>
            </GlideIn>
            <GlideInDelayed>
              <Subtitle>An unusual affinity for code and a passion for learning.</Subtitle>
            </GlideInDelayed>
          </Hero>
        </Content>
        <DividerMiddle
          bg={`linear-gradient(to right, ${colors['blue-darkest']} 0%, ${colors['blue-dark']} 100%)`}
          speed={-0.2}
          offset={0.9}
          factor={1.5}
        />
        <Content speed={0.4} offset={1.0} factor={2}>
          <Inner>
            <Title>Featured Projects</Title>
            <ProjectsWrapper>
              <ProjectCard imageSrc={lieuuLogo} screenImageSrc={lieuuScreen} title="Lieuu" link="https://lieuu.com">
                Web app to revolutionize the discovery of neighborhoods.
              </ProjectCard>
              <ProjectCard
                imageSrc={hcpLogo}
                screenImageSrc={hcpScreen}
                title="Home Care Plus"
                link="https://homecareplusllc.com"
              >
                Static website for an in-home non-medical care service for the elderly.
              </ProjectCard>
            </ProjectsWrapper>
          </Inner>
        </Content>
        <Divider speed={0.1} offset={1} factor={2}>
          <UpDown>
            <SVG icon="phone" width={6} fill={colors.white} left="85%" top="75%" />
            <SVG icon="content" width={8} fill={colors.teal} left="70%" top="20%" />
            <SVG icon="cloud" width={8} stroke={colors.orange} left="57%" top="5%" />
            <SVG icon="mac" className={hidden} width={24} fill={colors.white} left="10%" top="60%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="fav" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
            <SVG icon="cloud" width={12} stroke={colors.white} left="90%" top="30%" />
            <SVG icon="wifi" width={16} fill={colors.yellow} left="70%" top="90%" />
            <SVG icon="world" width={6} fill={colors.white} left="75%" top="10%" />
          </UpDownWide>
          <SVG icon="wifi" width={6} fill={colors.white} left="4%" top="20%" />
          <SVG icon="wifi" width={12} fill={colors.pink} left="80%" top="60%" />
          <SVG icon="phone" width={6} fill={colors.orange} left="10%" top="10%" />
          <SVG icon="code" width={16} stroke={colors.red} left="75%" top="30%" />
          <SVG icon="code" width={8} stroke={colors.yellow} left="80%" top="70%" />
        </Divider>
        <Divider bg="#23262b" clipPath="polygon(0 10%, 100% 4%, 100% 90%, 0 94%)" speed={0.2} offset={3} />
        <Divider speed={0.1} offset={3}>
          <UpDown>
            <SVG icon="world" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
            <SVG icon="cloud" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="mac" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
            <SVG icon="cloud" width={12} stroke={colors.white} left="95%" top="50%" />
            <SVG icon="wifi" width={6} fill={colors.white} left="85%" top="15%" />
            <SVG icon="content" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="wifi" width={6} fill={colors.white} left="4%" top="20%" />
          <SVG icon="code" width={6} fill={colors.orange} left="10%" top="10%" />
          <SVG icon="phone" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
        </Divider>
        <Content speed={0.4} offset={3}>
          <Inner>
            <Title>About</Title>
            <AboutHero>
              <Avatar src={headshot} alt="Chase Adams" />
              <AboutSub>Chase Adams</AboutSub>
              <AboutDesc>
                Chase Adams is an Arizona State University graduate who earned bachelor’s degrees in mechanical
                engineering and computational mathematical sciences. He has previously worked for multiple software
                companies as a full-stack engineer and founded a software startup in the real estate industry. He has
                extensive experience in distributed, scalable, and secure software architectures. Presently he is the
                Assistant Director of Strategic Projects at Arizona State University, leading the software initiatives
                within the lab. He is the founder of Lieuu LLC and Valure LLC.
              </AboutDesc>
            </AboutHero>
          </Inner>
        </Content>
        <Divider fill="#23262b" speed={0.2} offset={4}>
          <WaveWrapper>
            <InnerWave>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
                <path className={waveAnimation}>
                  <animate
                    attributeName="d"
                    values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                    repeatCount="indefinite"
                    dur="30s"
                  />
                </path>
              </svg>
            </InnerWave>
          </WaveWrapper>
        </Divider>
        <Content speed={0.4} offset={4}>
          <Inner>
            <Title>Contact</Title>
            <ContactText>
              <a href="mailto:c@cadams.io">Drop a line</a> or check out:{' '}
              <a href="https://github.com/chase-adams">GitHub</a> ||{' '}
              <a href="https://www.instagram.com/cadamsio/">Instagram</a>.
            </ContactText>
          </Inner>
          <Footer>&copy; {new Date().getFullYear() || '2018'} Chase Adams</Footer>
        </Content>
        <Divider speed={0.1} offset={4}>
          <UpDown>
            <SVG icon="fav" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
            <SVG icon="cloud" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="cloud" width={12} stroke={colors.white} left="95%" top="50%" />
            <SVG icon="content" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="mac" width={6} fill={colors.white} left="4%" top="20%" />
          <SVG icon="phone" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
        </Divider>
      </Parallax>
    </MuiThemeProvider>
  </React.Fragment>
);

export default Index;
