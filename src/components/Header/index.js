import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Particles from 'react-particles-js'
import {
  Element,
    Link as ScrollLink
} from 'react-scroll'

import { particleConfig } from './particle-config'
import './particles.css'
import '../../variables.js'
import { variables } from '../../variables'

const HeaderWrapper = styled(Element)`
  background: #524763;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 40vh;

  @media (min-width: 600px) {
    height: 70vh;
  }

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    /*clip-path: polygon(100% 0, 100% 85%, 66% 100%, 0% 75%, 0 0);*/
  }

  @media (min-width: 1000px) {
    height: 100vh;

    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      clip-path: none;
    }
  }

  &:after {
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.6),
      rgba(40, 180, 133, 0.6)
    );
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }
`

const HeaderContainer = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const NavContainer = styled.div`
  max-width: none;
  padding: 10px 1rem;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
`

const MainNav = styled.nav`
  margin: 0 auto;
  max-width: 1250px;
  padding: 0 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 2;
  position: relative;
  top: 0;

  h1 {
    img {
      height: 80px;
    }
  }

  ul {
    list-style: none;
    display: flex;

    li {
      margin-right: 30px;
      text-transform: uppercase;

      &:last-child {
        @media (min-width: 1280px) {
          margin-right: 0;
        }
      }

      a {
        text-decoration: none;
        color: ${variables.textColor};
        border-bottom: 3px solid transparent;
        padding-bottom: 3px;
        cursor: pointer;

        &:hover, &.active {
          border-bottom: 3px solid ${variables.primaryColor};
        }
      }
    }
  }
`

const TextWrapper = styled.div`
  z-index: 3;
  display: none;
  text-align: center;

  @media (min-width: 600px) {
    display: block;
  }

  .header__title {
    color: white;
    font-weight: 300;
    display: inline-block;
    font-size: 3rem;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;

    &.header__title--bold {
      font-weight: 500;
    }
  }

  .header__subtitle {
    color: white;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    line-height: 1;
    font-weight: 300;
    animation: moveInRight 1s ease-out;
    border: 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 10px 0;

    span {
      padding: 0 10px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }

  span {
    transition: all 0.3s ease-out;

    &:hover,
    &.rubberband {
      animation-name: rubberBand;
      color: #ffef05;
    }
  }
`

class Header extends Component {
  state = {
    animate: false,
  }

  componentDidMount() {
    const ANIMATION_TIMEOUT = 450

    setTimeout(() => {
      // Added two nested requestAnimationFrames
      requestAnimationFrame(() => {
        // Firefox will sometimes merge changes that happened here
        requestAnimationFrame(() => {
          this.setState({ animate: true })
        })
      })
    }, ANIMATION_TIMEOUT)
  }

  render() {
    const { background } = this.props.data
    return (
      <HeaderWrapper name="anchor-home">
        <Particles className="particles" params={particleConfig} />
        <HeaderContainer>
          <NavContainer>
            <MainNav>
              <a className="site-logo transition-link" href="/">
                <span className="logo-text">QK</span>
              </a>

              <ul>
                <li>
                    <ScrollLink
                        to="anchor-home"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={800}
                        activeClass="active"
                    >
                        Home
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="anchor-about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={800}
                        activeClass="active"
                    >
                    About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="anchor-spartanRaces"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={800}
                        activeClass="active"
                    >
                        Spartan Races
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="anchor-travel"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={800}
                        activeClass="active"
                    >
                        Traveling
                    </ScrollLink>
                </li>
              </ul>
            </MainNav>
          </NavContainer>
          <TextWrapper>
            <div>
              <span className="header__title" style={{ marginRight: 10 }}>
                Hi!
              </span>

              <span
                className="header__title header__title--bold"
                style={{ marginRight: 10 }}
              >
                I'm
              </span>
              <span
                className={`header__title header__title--bold ${
                  this.state.animate ? 'rubberband' : ''
                }`}
                style={{ color: '#FFEF05' }}
              >
                Quirin.
              </span>
            </div>

            <div className="header__subtitle">
              <span>Front End Developer</span>
              &amp;
              <span>Sports enthusiast</span>
            </div>
          </TextWrapper>
          <ScrollLink
            id="downButton"
            to="afterHeader"
            smooth={true}
            offset={-40}
            duration={800}
          />
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 70,
            width: '100%',
            height: '100%',
          }}
          sizes={background.sizes}
        />
        <Element
          name="afterHeader"
          style={{
            position: 'absolute',
            bottom: 0,
            width: 10,
            height: 10,
            margin: '0 auto',
          }}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
