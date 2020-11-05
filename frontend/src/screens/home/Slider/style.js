import styled from 'styled-components'

export const Sliders = styled.section`
    height: 800px;
    @media(min-width: 600px){
        height: 500px;
    }
    .container{
        margin-top: 36px;
        /* display: flex; */
    }
    .first-slider{
        background: url('./toro.jpg');
        background-size: cover;
        height: 300px;
        background-position: revert;
        opacity: 0.9;
    }.slider-second{
        background: url('./banner2.jpg');
        background-size: cover;
        height: 300px;
        background-position: revert;
    }.slider-third{
        background: url('./banner1.jpg');
        background-size: cover;
        height: 300px;
        background-position: revert;
    }.slider-fourth{
        background: url('./banner3.jpg');
        background-size: cover;
        height: 300px;
        background-position: revert;    
    }.first-slider__title{
        text-align: center;
        font-size: 94px;
        color: blue;
        top: 71px;
        position: relative;
        opacity: 1.0;
        color: #004789;
    }.slider__texts{
        color: white;
        margin: 80px 30px;
        font-size: 23px;
    }.logomob{
        @media (min-width: 600px) {
            display: none;
            float:  center;
        }
    }
    
`
