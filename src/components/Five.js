import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

const Five = () => {
  const data = useStaticQuery(graphql`
    query GET_EVENTO_EM {
      pic06: contentfulData(name: { eq: "Eventos Empresariales" }) {
        id
        name
        tag
        photo {
          description
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  const pic06 = data.pic06.photo.fluid
  const alt = data.pic06.tag

  return (
    <BackgroundImage
      Tag="section"
      className="spotlight style3 left inactive"
      fluid={pic06}
      backgroundColor={`#040e18`}
      id="three"
    >
      <section id="three" className="spotlight style3 left inactive">
        <span className="image fit main bottom">
          <Img fluid={pic06} alt={alt} />
        </span>
        <Fade left big>
          <div className="content">
            <header>
              <h2>Eventos Empresariales</h2>
              {/* <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p> */}
            </header>
            <ul>
              <li>
                Un acto donde reúnes miembros de tu organización para celebrar
                un aniversario o logro de la empresa.
              </li>
              <li>
                La fiesta y convivencia entre colaboradores, socios es parte
                importante para la comunicación e interacción de la
                organización.
              </li>
              <li>
                En una comunidad una fiesta con mariachi es símbolo de
                felicidad, identidad y alegría por parte de sus miembros.
              </li>
              <li>
                Cuando se alcanzan las metas de organización o comunidad la
                música con mariachis se hace sonar con alegría y emoción.
              </li>
            </ul>
            <ul className="actions">
              <li>
                <a href="/" className="button">
                  Informes
                </a>
              </li>
            </ul>
          </div>
        </Fade>
        <ScrollLink
          to="four"
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
    </BackgroundImage>
  )
}

export default Five
