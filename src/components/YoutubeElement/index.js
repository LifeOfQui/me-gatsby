import React from 'react'
import { Element } from 'react-scroll'
import LazyLoad from 'react-lazyload'

import { SectionHeadline } from '../Headline'

const YoutubeElement = () => (
  <Element name="anchor-travel">
    <SectionHeadline>Traveling</SectionHeadline>
    <div
      className=""
      style={{
        display: 'flex',
        maxWidth: 800,
        height: 450,
        margin: '0 auto',
      }}
    >

        <LazyLoad>
      <iframe
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/qo_k33RoIgI?ecver=1"
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        title="Urlaub Sonnenstrand"
      />
      </LazyLoad>
    </div>
  </Element>
)

export default YoutubeElement
