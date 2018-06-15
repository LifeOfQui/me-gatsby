import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Element, Link as ScrollLink } from 'react-scroll'
import './particles.css'
import '../../variables.js'
import { variables } from '../../variables'

const HeaderWrapper = styled(Element)`
  background: transparent;
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

  &.small {
    height: 470px;
  }

  //&:after {
  //  background-image: linear-gradient(
  //    to right bottom,
  //    rgba(126, 213, 111, 0.6),
  //    rgba(40, 180, 133, 0.6)
  //  );
  //  content: '';
  //  height: 100%;
  //  width: 100%;
  //  position: absolute;
  //  top: 0;
  //}
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

  .mobile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
    width: 35px;

    @media (min-width: 600px) {
      display: flex;
    }

    div {
      height: 3px;
      background-color: black;
      margin: 3px 0;
      border-radius: 24px;
      transition: 0.3s;

      &.one {
        width: 35px;
      }

      &.two {
        width: 20px;
      }

      &.three {
        width: 25px;
      }
    }

    &:hover {
      .one {
        animation: menu 0.8s ease-in-out forwards;
      }
      .two {
        animation: menu 0.8s 0.15s ease-in-out forwards;
      }
      .three {
        animation: menu 0.8s 0.3s ease-in-out forwards;
      }
    }
  }

  @keyframes menu {
    40% {
      width: 0;
    }
    90% {
      width: 42px;
    }
    100% {
      width: 35px;
    }
  }

  .closeButton {
    width: 32px;
    height: 35px;
    padding: 4px;
    background: ${variables.primaryColor};
    position: absolute;
    top: 9px;
    right: 19px;
    transition: transform 150ms ease-in-out;
    box-shadow: 0 10px 10px -4px rgba(0, 0, 0, 0.2);
    animation: bounce-out 400ms ease-in-out;
    display: none;
    justify-content: center;
    align-items: center;
    transform: scaleX(1.2);
    cursor: pointer;
    z-index: 9;

    &.active {
      display: flex;
    }

    &:hover {
      transform: scaleY(1.1) scaleX(1.3);
    }
  }

  .flyOutMenu {
    list-style: none;
    display: none;
    position: absolute;

    &.active {
      display: flex;
      flex-direction: column;
      background: white;
      position: absolute;
      top: 11px;
      right: 35px;
      padding: 16px 30px;
      transform-origin: top right;
      box-shadow: 0 24px 16px -15px rgba(0, 0, 0, 0.1),
        0 2px 26px rgba(0, 0, 0, 0.16);
      transform: scale(0);
      animation: bounce-out 400ms ease-in-out 100ms forwards;
      text-align: center;
    }

    @keyframes bounce-out {
      0% {
        transform: scale(0);
      }
      75% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    li {
      padding: 17px 0;
      text-transform: uppercase;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: none;
        color: ${variables.textColor};
        border-bottom: 3px solid transparent;
        padding-bottom: 3px;
        cursor: pointer;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          bottom: 0;
          left: 0;
          background-color: ${variables.primaryColor};
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out 0s;
          transform-origin: left;
        }

        &:hover:before,
        &.active:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
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

  &.hide {
    display: none;
  }

  .header__title {
    color: white;
    font-weight: 300;
    display: inline-block;
    font-size: 3rem;
    position: relative;
    margin: 0 auto;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    text-align: center;
    white-space: nowrap;

    &.typewriter {
      animation: blinkTextCursor 500ms steps(40) infinite normal;
    }
  }

  .header__subtitle {
    color: white;
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    line-height: 1;
    font-weight: 300;
    border: 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 10px 0;

    span:not(.ltr) {
      padding: 0 10px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
`

class Header extends Component {
  state = {
    animate: false,
  }
  i = 0
  text = "Hi! I'm Quirin."

  writeText = () => {
    if (this.i < this.text.length) {
      document.querySelector('.header__title').innerHTML += this.text.charAt(
        this.i
      )
      this.i++
      setTimeout(this.writeText, 100)
    }
  }

  toggleMenu = () => {
    document.querySelector('.flyOutMenu').classList.toggle('active')
    if (document.querySelector('.flyOutMenu').classList.contains('active')) {
      document.querySelector('.closeButton').classList.add('active')
    } else {
      document.querySelector('.closeButton').classList.remove('active')
    }
  }

  randomGenerator() {
    const randomNumber = document.querySelectorAll('.nbr')
    const timer = 15
    let data = 0
    let maxWert = 0

    const letters = [
      'F',
      'r',
      'o',
      'n',
      't',
      'E',
      'n',
      'd',
      'D',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      'S',
      'p',
      'o',
      'r',
      't',
      's',
      'e',
      'n',
      't',
      'h',
      'u',
      's',
      'i',
      'a',
      's',
      't',
    ]

    randomNumber.forEach(element => {
      // wie oft es wechseln soll bis es zu Lettern wird
      let change = Math.round(Math.random() * 100)
      maxWert = Math.max(change, maxWert)
      element.setAttribute('data-change', `${change}`)
    })

    const it = setInterval(function() {
      let ele = randomNumber[Math.round(Math.random() * randomNumber.length)]

      if (ele && ele.classList.contains('nbr')) {
        ele.setAttribute('data-number', `${data}`)
        ele.textContent = Math.round(Math.random() * 9)
      }

      data++

      randomNumber.forEach((element, idx) => {
        // hier dann durch letter ersetzen
        if (
          parseInt(element.getAttribute('data-number')) >
          parseInt(element.getAttribute('data-change'))
        ) {
          element.innerHTML = letters[idx]
          element.classList.remove('nbr')
        }
      })

      if (document.querySelectorAll('.nbr').length === 0) {
        clearInterval(it)
      }
    }, timer)
  }

  componentDidMount() {
    const ANIMATION_TIMEOUT = 450

    if (this.props.showAll) {
      setTimeout(() => {
        // Added two nested requestAnimationFrames
        requestAnimationFrame(() => {
          // Firefox will sometimes merge changes that happened here
          requestAnimationFrame(() => {
            this.setState({ animate: true })
            this.writeText()
            this.randomGenerator()
          })
        })
      }, ANIMATION_TIMEOUT)
    }
  }

  render() {
    const { background, backgroundSmall } = this.props.data
    const { active, showAll } = this.props
    return (
      <HeaderWrapper name="anchor-home" className={showAll ? '' : 'small'}>
        <HeaderContainer>
          <NavContainer>
            <MainNav>
              <a className="site-logo transition-link" href="/">
                <span className="logo-text">QK</span>
              </a>

              <div className="mobile" onClick={this.toggleMenu}>
                <div className="one" />
                <div className="two" />
                <div className="three" />
              </div>

              <div className="closeButton" onClick={this.toggleMenu}>
                X
              </div>

              <ul className="flyOutMenu">
                <li>
                  <Link to="/" className={active === 'Home' ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/spartan-races"
                    className={active === 'SpartanRace' ? 'active' : ''}
                  >
                    Spartan Races
                  </Link>
                </li>
                <li>
                  <Link
                    to="/travel"
                    className={active === 'Travel' ? 'active' : ''}
                  >
                    Travel
                  </Link>
                </li>
              </ul>
            </MainNav>
          </NavContainer>
          <TextWrapper className={showAll ? '' : 'hide'}>
            <div>
              <span
                className={`header__title ${
                  this.state.animate ? 'typewriter' : ''
                }`}
              />
            </div>

            <div className="header__subtitle">
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="ltr">&nbsp;</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="ltr">&nbsp;</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span>&amp;</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="ltr">&nbsp;</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
              <span className="nbr ltr">{Math.round(Math.random() * 9)}</span>
            </div>
          </TextWrapper>
          <ScrollLink
            id="downButton"
            to="afterHeader"
            smooth={true}
            offset={-40}
            duration={800}
            className={showAll ? '' : 'hide'}
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
          sizes={showAll ? background.sizes : backgroundSmall.sizes}
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
