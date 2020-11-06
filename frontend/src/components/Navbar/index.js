import * as s from './style.js'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  Nav
} from 'reactstrap'
// import Link from 'next/link'
import Container from '@material-ui/core/Container'

const Navba = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <s.Navbar>
      <Container>
        <Navbar light expand="md">
          <div>
            <h6 className="logo"> 11 9594118997</h6>
          </div>
          <s.NavbarTogglers onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <s.Nav>
                {/* <Link href="/"><li className="nav__list"><a className="nav__list__item">Home </a></li></Link>
                <Link href="/about"><li className="nav__list"><a className="nav__list__item">Quem Somos</a></li></Link>
                <Link href="/services"><li className="nav__list"><a className="nav__list__item">Serviços</a></li></Link>
                <Link href="/contact"><li className="nav__list"><a className="nav__list__item" >Contato</a></li></Link> */}
              </s.Nav>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </s.Navbar>
  )
}

export default Navba
