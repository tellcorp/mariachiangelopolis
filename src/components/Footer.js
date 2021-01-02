import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a href="/" className="icon brands alt fa-facebook-f">
          <span className="label">Facebook</span>
        </a>
      </li>

      <li>
        <a href="/" className="icon brands alt fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon solid alt fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; Mariachi Angelopolis.</li>
      <li>
        Diseño: <a href="http://2f.com.mx">2F</a>
      </li>
    </ul>
  </footer>
)

export default Footer
