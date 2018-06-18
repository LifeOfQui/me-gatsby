import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

import hero from '../../images/grid/hero.jpg'
import chain from '../../images/grid/chain.jpg'
import crawl from '../../images/grid/crawl.jpg'
import bucket from '../../images/grid/bucket.jpg'
import mud from '../../images/grid/mud.jpg'
import rock from '../../images/grid/rock.jpg'
import emMedal from '../../images/grid/emMedal.jpg'
import sandbag from '../../images/grid/sandbag.jpg'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bucket});
  height: 350px;
  width: 100%;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  margin-right: 1.5rem;
  flex-shrink: 0;
  flex-basis: 260px;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    width: 410px;
    margin-bottom: 0;
  }
`

const Text = styled(SectionHeadline)`
  mix-blend-mode: color-dodge;
  font-size: 3.5rem;

  @media (min-width: 700px) {
    width: 420px;
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
    text-align: left;
    font-weight: normal;
  }
`

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #494c4e;
`

import './races.css'

const SpartanRaceGrid = () => (
  <Element name="anchor-spartanRaces">
    <Wrapper>
      <Outer>
        <Text>Spartan Races</Text>
      </Outer>
      <Paragraph style={{ alignSelf: 'flex-end', margin: 0 }}>
        <strong>Sport was and is a big part of my life.</strong>
        <p
          style={{
            marginBottom: 0,
          }}
        >
          Obstacle Course Racing became my main sport the last 2 years, because
          you don't just run, but have to overcome many obstacles on the track,
          it also keeps you holistically fit. As you can see in the pictures.
          Carrying chains, crawling through the mud, carrying buckets of gravel
          and many other things.
        </p>
      </Paragraph>
    </Wrapper>
    <div className="grid">
      <div className="area">
        <img src={hero} alt="" />
        <a href="#" target="_blank" className="rollover-content">
          <span>Spartan Race EM Andorra 09/2017</span>
        </a>
      </div>
      <div className="area">
        <img src={sandbag} alt="" />
        <div href="#" className="rollover-content">
          <span>Spartan Race Oberndorf 09/2016</span>
        </div>
      </div>
      <div className="area">
        <img src={mud} alt="" />
        <div href="#" className="rollover-content">
          Spartan Race Oberndorf 09/2017
        </div>
      </div>
      <div className="area medal">
        <img src={emMedal} alt="" />
        <div href="#" className="rollover-content">
          <span>Spartan Race EM Andorra 09/2017</span>
        </div>
      </div>
      <div className="area">
        <img src={crawl} alt="" />
        <div href="#" className="rollover-content">
          Spartan Race Wien 05/2017
        </div>
      </div>
      <div className="area">
        <img src={chain} alt="" />
        <div href="#" className="rollover-content">
          <span>Spartan Race Oberndorf 09/2017</span>
        </div>
      </div>
      <div className="area">
        <img src={rock} alt="" />
        <div href="#" className="rollover-content">
          <span>Spartan Race Sparta 11/2017</span>
        </div>
      </div>
      <div className="area tall">
        <img src={bucket} alt="" />
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
