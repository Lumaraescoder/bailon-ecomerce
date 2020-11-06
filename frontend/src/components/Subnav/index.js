import * as s from './style.js'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  Nav
} from 'reactstrap'
import Container from '@material-ui/core/Container'

const Subnav = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <s.Navbar>
        <Container>
          <Navbar light expand="md">
            <div className="subnav">
              <img className="logo" alt="logo" src="./logo.png" />
            </div>
            <div>
              <input className="searcbar" type="text" placeholder="Procurar..." name="search" />
            </div>
            <div className="login">
              <s.AccountCircleIcons />
              <h5 className="login__button">Entrar<br />Cadastrar</h5>
            </div>
            <div className="product">
              <s.ShoppingCartIcons />
              <h5 className="product__car">Carrinho <br /><span className="product__car__small">produto</span></h5>
            </div>
          </Navbar>
        </Container>
      </s.Navbar>

      <s.Navmobile>
        <Navbar light expand="md">
          <h5 className="logomob">Bailon radiadores</h5>
          <s.NavbarTogglers onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <s.Nav className="ml-auto">
                <div className="navbar">
                  <ul className="navbar__unordered">
                    <li className="navbar__item" href="#">Home </li>
                    <li className="navbar__item" href="#">produtos </li>
                    <li className="navbar__item" href="#">Minha Conta </li>
                    <li className="navbar__item" href="#">Meu carrinho </li>
                    <li className="navbar__item" href="#">Cadastrar</li>
                    <button className="navbar__button">Entrar!</button>
                  </ul>
                </div>
              </s.Nav>
            </Nav>
          </Collapse>
        </Navbar>
      </s.Navmobile>
    </div>
  )
}

export default Subnav
