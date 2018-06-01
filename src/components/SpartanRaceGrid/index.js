import React from 'react'
import { Element } from 'react-scroll'

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

export default SpartanRaceGrid
