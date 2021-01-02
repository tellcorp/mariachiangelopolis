import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Four = ({ className }) => {
  const data = useStaticQuery(graphql`
    query GET_SERENATA {
      pic05: contentfulData(name: { eq: "Serenatas" }) {
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

  const pic05 = data.pic05.photo.fluid
  const alt = data.pic05.tag

  return (
    <BackgroundImage
      Tag="section"
      className="spotlight style3 right inactive"
      fluid={pic05}
      backgroundColor={`#040e18`}
      id="two"
    >
      <section id="two" className="spotlight style2 right inactive">
        <span className="image fit main"></span>
        <Fade right big>
          <div className="content">
            <header>
              <h2>Serenatas</h2>
              {/* <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p> */}
            </header>
            <ul>
              <li>
                Conquista o declararle tu amor a aquella persona tan especial
                que ha marcado la historia de tu vida.
              </li>
              <li>
                Si tienes una novia o esposa no lo pienses más, tomala por
                sorpresa y demuestrale todo el amor que sientes por ella.
              </li>
              <li>
                Junta a tus familiares, amigos de confianza o tu mismo en
                privado para llevarle una gran sorpresa a tu familia que tanto
                quieres.
              </li>
              <li>
                Con mariachis, cantale al pie de su ventana para que sepa que la
                quieres. Y sepas el hermoso cariño que dios te ha mandado nomas
                para ti.
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
          to="three"
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

const StyledBackgroundSection = styled(Four)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default Four
