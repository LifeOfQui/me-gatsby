import React from 'react'
import { Element } from 'react-scroll'

import { SectionHeadline } from '../Headline'

const YoutubeElement = () => (
  <Element name="anchor-travel">
    <SectionHeadline>Traveling</SectionHeadline>
    <div
      className=""
      style={{
        display: 'flex',
        width: 800,
        height: 450,
        margin: '0 auto',
      }}
    >
      <iframe
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/qo_k33RoIgI?ecver=1"
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
      />
    </div>
  </Element>
)

export default YoutubeElement
