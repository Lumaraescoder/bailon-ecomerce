import React, { Component } from 'react'
import Slider from 'react-slick'
import * as s from './style.js'
import { Container } from 'reactstrap'
import { makeStyles } from '@material-ui/core/styles'

function SampleNextArrow (props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow (props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex'}}
      onClick={onClick}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    }
  }
}))

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const SimpleSlider = (props) => {
  const classes = useStyles()

  return (
    <s.Sliders>
      <Container fluid>
        <div className="container">
          <img src="logo2.png" className="logomob"/>
          <Slider {...settings}>
            <div className="first-slider">
              <h3 className="first-slider__title">Bailon radiadores</h3>
            </div>
            <div className="slider-second">
              <div className="slider__texts">
                <h3>Radiadores Para veículos<br /> nacionais e importados</h3>
                <p>Troca e manuntenção de radiadores parar o melhor<br/> funcionamento da refrigeração do seu veículo.</p>
              </div >
            </div>
            <div className="slider-third">
              <div className="slider__texts">
                <h3>Manuntenção do ar <br/> Condicionado</h3>
                <p>A Manutenção do Ar Condicionado do seu veículo garante um <br/>  ar mais puro e diminui riscos de infecções respiratórias. </p>
              </div>
            </div>
            <div className="slider-fourth">
              <div className="slider__texts">
                <h3>Ventoinha <br/>do Radiador</h3>
                <p>A Bailon Radiadores é especializada em <br/>     sistema de arrefecimento e Ventoinhas. Confira! </p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </s.Sliders>
  )
}

export default SimpleSlider
