import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import './composition.css'
import { SectionHeadline } from '../Headline'

const CompositionWrapper = styled.div`
  position: relative;
  width: 70vw;
  margin: auto;
  height: 500px;

  @media (min-width: 700px) {
    width: 60vw;
    height: 500px;
  }
`

const HighlightElement = ({ data }) => (
  <div className="wrapper">
    <SectionHeadline>Spartan Race EM Andorra 09/2017</SectionHeadline>
    <div>
      <CompositionWrapper className="composition">
        <Img
          className="composition__photo composition__photo--p1"
          sizes={data.andorraStart.sizes}
        />
        <Img
          className="composition__photo composition__photo--p2"
          sizes={data.andorraFinish.sizes}
        />
        <Img
          className="composition__photo composition__photo--p3"
          sizes={data.andorraSnow.sizes}
        />
      </CompositionWrapper>
    </div>
  </div>
)

export default HighlightElement
