import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const Contrato = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="container">
        <div className="row align-self-center">
          <div className="col-4"></div>
          <div className="col-4">
            <h2>Informes - contrato</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  aria-describedby="emailHelp"
                  placeholder="Nombre completo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputMessage" className="form-label">
                  Tiene alguna pregunta en particular
                </label>
                <textarea
                  className="form-control"
                  id="exampleInputMessage"
                  placeholder="Mensaje"
                />
              </div>

              <div className="row align-self-center mb-3">
                <div className="col-4">
                  <Link to={closeTo}>
                    <button className="button"> Cerrar </button>
                  </Link>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                  <button type="submit" className="button">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default Contrato
