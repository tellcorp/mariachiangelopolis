import React, { useState } from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import emailjs from 'emailjs-com'

const Serenata = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    service: 'serenata',
    loading: false,
    sendOK: '',
  })

  const handleState = (name, value) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  const sendEmail = e => {
    emailjs
      .send(
        'service_zbxgr0m',
        'Serenata_mangelopolis',
        e,
        'user_qgzGY81K2NoloDw1UgMGr'
      )
      .then(
        result => {
          console.log(result.text)
          setState({
            name: '',
            email: '',
            message: '',
            loading: false,
            sendOk: result.text,
          })
        },
        error => {
          console.log(error.text)
        }
      )
  }

  const handleSubmit = e => {
    setState({ loading: true })
    e.preventDefault()
    sendEmail(state)
  }

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div className="container">
          <div className="row align-self-center">
            <div className="col-4"></div>
            <div className="col-4">
              <h2>Informes - {state.service}</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Nombre completo"
                    value={state.name || ''}
                    onChange={e => handleState(e.target.name, e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Correo electrónico"
                    value={state.email || ''}
                    onChange={e => handleState(e.target.name, e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputMessage" className="form-label">
                    Tiene alguna pregunta en particular
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    value={state.message || ''}
                    onChange={e => handleState(e.target.name, e.target.value)}
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
                    <button
                      type="submit"
                      className="button"
                      onClick={handleSubmit}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
              <div className="col-8 col-12-xsmall">
                {state.loading ? (
                  <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : null}
                {state.sendOk === 'OK' ? (
                  <h4>Su mensaje ha sido enviado correctamente.</h4>
                ) : null}
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
}
export default Serenata
