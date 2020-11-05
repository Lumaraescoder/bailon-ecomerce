import styled from 'styled-components'

export const Products = styled.section`
    height: 1200px;
    
    @media(min-width: 600px){
       height: 700px;
    }
    background-color: #004789;
   .products{
        height: 800px;
        background: #004789;
        height: 500px;
        border: solid  #004789;
       
    }.products__title{
        text-align: center;
        color: white;
        margin-top: 100px;
        font-size: 38px;
    }.poducts__images{
      
    }.products__uno{
        margin-top: 100px;
        @media (min-width: 600px){
             display: flex;
             list-style-type: none;
             color: white;
             text-align: center;
        }
    }.products__images__list{
        margin-left: 30px;
        width: 250px;
        @media(min-width: 600px){
          
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
