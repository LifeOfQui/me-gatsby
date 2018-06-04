import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { variables } from '../../variables'

import { Element } from 'react-scroll'
import { SectionHeadline } from '../Headline'

const Outer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: ${variables.primaryColor};

  p {
    font-size: 17px;
    line-height: 1.5;
    color: ${variables.textColor};
  }
`

const Headline = styled.h3`
  color: ${variables.secondaryColor};
  font-size: 28px;
  margin-top: 0;
  text-decoration: underline;
  text-decoration-skip: ink;
`

const AboutMe = ({ data }) => (
  <Element name="anchor-about">
    <SectionHeadline>About</SectionHeadline>
    <Outer>
      <LazyLoad height={200}>
        <Img
          style={{
            borderRadius: '50%',
            width: '200px',
            float: 'left',
            margin: '0 2.5em 2.5em 0',
            shapeOutside: 'circle()',
            border: `5px solid ${variables.secondaryColor}`,
          }}
          sizes={data.me.sizes}
        />
      </LazyLoad>
      <div className="generic-content-container">
        <Headline>I'm a Front End Developer & I Build Websites</Headline>
        <p>
          I code beautifully simple things, and I ❤️ what I do.
          <br />
          My interest in the design and development of appealing user interfaces
          led me to specialize in frontend development.
        </p>
        <p>
          When I'm not pushing pixels, you'll find me either spending time with
          my wife 👩🏽 and son 👶🏼 or train for one of my sports.
        </p>
      </div>
    </Outer>
  </Element>
)

export default AboutMe
