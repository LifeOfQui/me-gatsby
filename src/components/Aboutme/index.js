import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { variables } from '../../variables'

import { Element } from 'react-scroll'
import { SectionHeadline } from '../Headline'

const Outer = styled.div`
  margin: 0 auto;
  padding: 2.5rem;
  text-align: center;
  
  @media (min-width: 600px) {
    text-align:left;
  }

  p {
    font-size: 17px;
    line-height: 1.5;
    color: ${variables.textColor};
  }
`

const Headline = styled.h3`
  color: #333;
  font-size: 28px;
  margin-top: 0;
  text-decoration: underline;
  text-decoration-skip: ink;
`

const CustomSectionHeadline = styled(SectionHeadline)`
  @media (min-width: 600px) {
    position: absolute;
    z-index: 2;
    left: 159px;
    top: -27px;
    font-size: 6rem;
    margin: 0;
  }
`

const MeImg = styled(Img)`
  width: 200px;
  float: none;
  margin: auto;
  border: 5px solid ${variables.secondaryColor};
  
  @media (min-width: 600px) {
    float: left;
    margin: 0 2.5em 1.5em 0;
  }
`
const AboutMe = ({ data }) => (
  <Element name="anchor-about" style={{ position: 'relative' }}>
    <CustomSectionHeadline>About</CustomSectionHeadline>
    <Outer>
      <MeImg sizes={data.me.sizes} />
      <div className="generic-content-container">
        <Headline style={{ marginTop: 50 }}>
          I'm a Front End Developer & I Build Websites
        </Headline>
        <p>
          I code beautifully simple things, and I ❤️ what I do.
          <br />
          My interest in the design and development of appealing user interfaces
          led me to specialize in frontend development.
        </p>
        <p>
          When I'm not pushing pixels, I either spend time with my wife 👩🏽 and son 👶🏼 at home or <Link className="linkTo" to="/travel">travel</Link> with them.
            In my spare time I train for <Link className="linkTo" to="/spartan-races">Spartan Races</Link>.
        </p>
      </div>
    </Outer>
  </Element>
)

export default AboutMe
