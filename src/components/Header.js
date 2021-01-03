import React from 'react'
import { Link } from 'gatsby'
import MobileMenu from './MobileMenu'

const timeoutLength = 300

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      mobileActiveClass: '',
      mouseOverButton: false,
      mouseOverMenu: false,
      mouseOverSubButton: false,
      mouseOverSubMenu: false,
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        // set the class for the mobile menu
        this.state.active
          ? this.setState({
              mobileActiveClass: 'navPanel-visible',
            })
          : this.setState({
              mobileActiveClass: '',
            })
      }
    )
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  enterButton = () => {
    this.setState({ mouseOverButton: true })
  }

  leaveButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverButton: false })
    }, timeoutLength)
  }

  enterMenu = () => {
    this.setState({ mouseOverMenu: true })
  }

  leaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false })
    }, timeoutLength)
  }

  enterSubButton = () => {
    this.setState({ mouseOverSubButton: true })
  }

  leaveSubButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubButton: false })
    }, timeoutLength)
  }

  enterSubMenu = () => {
    this.setState({ mouseOverSubMenu: true })
  }

  leaveSubMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubMenu: false })
    }, timeoutLength)
  }

  render() {
    const siteTitle = this.props.siteTitle
    const menuLinks = this.props.menuLinks
    const open = this.state.mouseOverButton || this.state.mouseOverMenu

    return (
      <React.Fragment>
        <div className={`navbar-menu ${this.state.mobileActiveClass}`}>
          <div id="titleBar">
            <button
              onClick={() => this.toggleHamburger()}
              className="toggle btn-color"
              aria-label="Open mobile menu"
            ></button>
            <span className="title">
              <Link to="/">{siteTitle}</Link>
            </span>
          </div>
          <div id="navPanel">
            <MobileMenu siteTitle={siteTitle} menuLinks={menuLinks} />
          </div>
        </div>

        <header id="header">
          <h1 id="logo">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <div className="navbar-menu">
            <nav>
              <ul style={{ display: 'flex', flex: 1 }}>
                {menuLinks.map(link =>
                  link.items ? (
                    <React.Fragment key={link.name}>
                      <li key={link.name}>
                        <Link
                          onMouseEnter={this.enterButton}
                          onMouseLeave={this.leaveButton}
                          className={link.cl}
                          to={link.link}
                        >
                          {link.name}
                        </Link>
                        <ul
                          style={
                            open
                              ? {
                                  display: `block`,
                                  background: `rgba(39, 40, 51, 0.965)`,
                                  position: `absolute`,
                                  right: `55%`,
                                  minWidth: `150px`,
                                  borderRadius: `5px`,
                                }
                              : { display: `none` }
                          }
                          // onMouseEnter={this.enterMenu}
                          // onMouseLeave={this.leaveMenu}
                        ></ul>
                      </li>
                    </React.Fragment>
                  ) : (
                    <li key={link.name}>
                      <Link className={link.cl} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
