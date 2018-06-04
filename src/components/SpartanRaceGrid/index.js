import React from 'react'
import { Element } from 'react-scroll'
import LazyLoad from 'react-lazyload'

import hero from '../../images/grid/hero.jpg'
import chain from '../../images/grid/chain.jpg'
import crawl from '../../images/grid/crawl.jpg'
import bucket from '../../images/grid/bucket.jpg'
import mud from '../../images/grid/mud.jpg'
import rock from '../../images/grid/rock.jpg'
import emMedal from '../../images/grid/emMedal.jpg'
import sandbag from '../../images/grid/sandbag.jpg'

import './races.css'
import { SectionHeadline } from '../Headline'

const SpartanRaceGrid = () => (
  <Element name="anchor-spartanRaces">
    <SectionHeadline>Spartan Races</SectionHeadline>
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

export default SpartanRaceGrid
