import styled from 'styled-components'

export const Services = styled.section`
     margin-top: 100px;
     height: 2300px;
     background: #004789;
     @media (min-width: 600px){
         height: 1000px;
     }
   .products{
        background: #004789;
        margin-top: 100px;
        height: 500px;
        border: solid  #004789;
    }.products__title{
        text-align: center;
        color: white;
        margin-top: 80px;
        font-size: 50px;
    }.product__size{
        color: white;
        text-align: center;

    }.poducts__images{
       
    }.products__uno{
    
        @media (min-width: 600px){
         display: flex;
         list-style-type: none;
         color: white;
         text-align: center;
        }
    }.products__images__list{
        /* width: 250px; */
        width: 100%;
        @media(min-width: 600px){
            /* margin-left: 50px; */
            width: 350px;
            border-radius: 12px;
            width: 100%;
        }
    }.products__store{

       @media (min-width: 600px){
        margin-top: 100px;
        color: white;
        text-align: center;
        font-size: 30px;
        margin-right: -40px;
       }
    }
`
