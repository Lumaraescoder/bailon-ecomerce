import styled from 'styled-components'

export const About = styled.section`
    height: 1600px;
    @media (min-width: 600px){
        height: 800px;
    }
    margin-top: 100px;
    .about{
        
    }.about__title{
        text-align: center;
        font-size: 50px;
    }.description{
        display: grid;
    }.description__image{
        width: 500px;
        margin-top: 100px;
        height: 244px;
        border-radius: 12px;
        width: 475px;
        margin-top: 121px;
        height: 277px;
        border-radius: 48px;
        width: 100%px;

        @media (max-width: 600px){
        display: none;

        }
    }.description__text{
        text-align: center;
        font-weight: 500;
        display: grid;

    }.about__container{
        margin-top: 91px;
        /* margin-right: 108px; */
        position: relative;
        right: -94px;
        
    }

`