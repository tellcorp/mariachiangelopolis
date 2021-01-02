import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby-plugin-modal-routing'

const Six_a = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Nuestros Servicios</h2>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-chart-area"></span>
              <h3>1 hora</h3>
              <p>
                Te complacemos con un repertorio de calidad con los exitos del
                momento.
              </p>
              <ul className="actions special">
                <li>
                  <Link to="/1-hora" asModal className="button">
                    Informes
                  </Link>
                </li>
              </ul>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-comment"></span>
              <h3>Serenata</h3>
              <p>El mejor regalo para esa persona especial.</p>
              <br />
              <ul className="actions special">
                <li>
                  <Link to="/serenata" asModal className="button">
                    Informes
                  </Link>
                </li>
              </ul>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-flask"></span>
              <h3>CONTRATO</h3>
              <p>Contrato ejecutivo para grandes eventos. </p>
              <br />
              <ul className="actions special">
                <li>
                  <Link to="/contrato" asModal className="button">
                    Informes
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
        {/* <footer className="major">
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Magna sed feugiat
              </a>
            </li>
          </ul>
        </footer> */}
      </div>
    </section>
  </Fade>
)

export default Six_a
