import React from 'react'
import { Element } from 'react-scroll'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import hero from '../../images/grid/hero.jpg'
import chain from '../../images/grid/chain.jpg'
import crawl from '../../images/grid/crawl.jpg'
import bucket from '../../images/grid/bucket.jpg'
import mud from '../../images/grid/mud.jpg'
import rock from '../../images/grid/rock.jpg'
import emMedal from '../../images/grid/emMedal.jpg'
import sandbag from '../../images/grid/sandbag.jpg'

const Outer = styled.div`
  background-image: url(${bucket});
  height: 350px;
  width: 410px;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  margin-right: 1.5rem;
  flex-shrink: 0;
  flex-basis: 260px;
`

const Text = styled.p`
  width: 410px;
  mix-blend-mode: difference;
  font-size: 6rem;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #ffffff, #ff00ff);
  -webkit-background-clip: text;
  color: transparent;
  position: absolute;
  margin: 0;
  padding: 0;
  top: -60px;
  left: 120px;
`

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #494c4e;
`

import './races.css'

const SpartanRaceGrid = () => (
  <Element name="anchor-spartanRaces">
    <div style={{ display: 'flex' }}>
      <Outer className="backdrop">
        <Text className="text">Spartan Races</Text>
      </Outer>
      <Paragraph style={{ alignSelf: 'flex-end', margin: 0 }}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden flows by their place and supplies it
        with the necessary regelialia. It is a paradisematic country, in which
        roasted parts of sentences fly into your mouth. Even the all-powerful
        Pointing has no control about the blind texts it is an almost
        unorthographic life One day however a small line of blind text by the
        name of Lorem Ipsum decided to leave for the far World of Grammar.
      </Paragraph>
    </div>
    <div className="grid">
      <div className="area">
        <LazyLoad>
          <img src={hero} alt="" />
        </LazyLoad>
        <a href="#" target="_blank" className="rollover-content">
          <span>Spartan Race EM Andorra 09/2017</span>
        </a>
      </div>
      <div className="area">
        <LazyLoad>
          <img src={sandbag} alt="" />
        </LazyLoad>
        <div href="#" className="rollover-content">
          <span>Spartan Race Oberndorf 09/2016</span>
        </div>
      </div>
      <div className="area">
        <LazyLoad>
          <img src={mud} alt="" />
        </LazyLoad>
        <div href="#" className="rollover-content">
          Spartan Race Oberndorf 09/2017
        </div>
      </div>
      <div className="area medal">
        <LazyLoad>
          <img src={emMedal} alt="" />
        </LazyLoad>
        <div href="#" className="rollover-content">
          <span>Spartan Race EM Andorra 09/2017</span>
        </div>
      </div>
      <div className="area">
        <LazyLoad>
          <img src={crawl} alt="" />
        </LazyLoad>
        <div href="#" className="rollover-content">
          Spartan Race Wien 05/2017
        </div>
      </div>
      <div className="area">
        <LazyLoad>
          <img src={chain} alt="" />
        </LazyLoad>
        <div href="#" className="rollover-content">
          <span>Spartan Race Oberndorf 09/2017</span>
        </div>
      </div>
      <div className="area">
        <LazyLoad>
          <img src={rock} alt="" />
        </LazyLoad>
        <div href="#" className="rollover-content">
          <span>Spartan Race Sparta 11/2017</span>
        </div>
      </div>
      <div className="area tall">
        <LazyLoad>
          <img src={bucket} alt="" />
        </LazyLoad>
        <div href="#" className="rollover-content">
          Spartan Race Wien 05/2017
        </div>
      </div>
    </div>
  </Element>
)

import { SectionHeadline } from '../Headline'
import { variables } from '../../variables'

export default SpartanRaceGrid
