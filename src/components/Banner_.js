import React from 'react'
import pic01 from '../assets/images/pic01.jpg'

import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header className="fondo-azul">
        <h2 className="colorH2Banner">MARIACHIS EN PUEBLA</h2>
        <p className="colorH2Banner">
          MARIACHI ANGELOPOLIS TE OFRECE
          <br />
          UNA PRESENTACIÓN ARTÍSTICA MEXICANA.
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
