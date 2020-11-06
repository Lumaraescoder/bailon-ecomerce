import React from 'react'
import * as s from './style'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'


const Footer = () => (
  <div>
    <s.Footer>
      <div className="footer">
        <ul className="footer__list">
          <li><strong>Institucional</strong></li>
          <li>Perguntas frequentes</li>
          <li>Fale conosco</li>
        </ul>
      </div>
      <div className="follow">
        <ul className="follow__list">
          <li className="follow__strong"><strong>Siga-nos</strong></li>
          <li><a href="https://instagram.com/bochnia_muniz"><FacebookIcon/></a></li>
          <li className="follow__spacing"><a href="https://www.facebook.com/Bochnia-Muniz-114155427004075/"><InstagramIcon/></a></li>
        </ul>
      </div>
      {/* <div className="follow__inline">
        <ul className="follow__inline">
        </ul>
      </div> */}
      {/* <div className="logo">
        <img className="logo__footer" src="logo.png/"/>
      </div> */}
    </s.Footer>
  </div>
)

export default Footer