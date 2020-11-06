import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { NavbarToggler } from 'reactstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export const Navbar = styled.nav`
    display: none;

    @media only screen and (min-width: 600px) {
      margin-top: 15px;
      background-color: #004789;
      height: 77px;
      display: flex;
    }.subnav{
      margin: -40px 0px
    }
    }.logo{
      width: 150px;

      @media only screen and (min-width: 600px) {
        position: relative;
        left: 70px;
        width: 106px;  
    }
    }.searcbar{
      width: 100px;

      @media only screen and (min-width: 600px) {
        border-radius: 5px;
        width: 281px;
        margin: 0px 0px 0px 80px;
    }
    }.login{ 
     display: none;
      @media only screen and (min-width: 600px) {
        margin: 0px 13px;
        display: flex;
        color: white;
    }
    }.login__button{
      margin: 10px 10px
    }.product{ 
      display: none;
      @media only screen and (min-width: 600px) {
       display: flex;
       border-radius: 10px;
       background-color: #078d02;
       top: -4px;
       position: relative;
      
    } 
    }.product__car{
      color: white;
      width: 112px;
      height: 60px;
}
    }
`
export const AccountCircleIcons = styled(AccountCircleIcon)`
   margin: 10px 10px;
   width: 300px;
   font-size: 54px !important;
`
export const ShoppingCartIcons = styled(ShoppingCartIcon)`
  margin-top: 10px;
  font-size: 34px !important;
  color: white;

`

export const NavbarTogglers = styled(NavbarToggler)`
  border-color: white;
  border-width: 3px;
  padding: 0px 3px;
  color: white !important;
  

`
export const Divisor = styled.div` 

`
export const SearchIcons = styled(SearchIcon)`

  color: black;
  border-width: 10px;
  background-color: white;
  position: relative;
  margin: 0px -30px;

`

export const Nav = styled.ul`
  float: right;
  color:#787878;
  padding: 0px 10px 51px 10px;
   @media only screen and (max-width: 600px) {
    
    color: #787878
  
}
`

// mobile

export const Navmobile = styled.nav`

   font-size:   30px;
   color:       #787878;
   background-color: #004789;
  @media only screen and (min-width: 600px) {
    display: none;
   
  }
  .navbar{
   
    
  }.navbar__unordered{
    color: white;
    position: relative;
    right: 30px;
    top: 10px;
  }.navbar__item{
    @media only screen and (min-width: 600px) {
    display: none;
   
  }
    list-style-type: none;
    display: table;

  }.navbar__enter{
    background: white;
    color:   #004789;
    list-style-type: none;

  }.navbar__button{
    padding: 0px 56px;
    border-radius: 27px;
    margin: 20px -27px;
    background: green;
    color: white;
  }.navbar__dash{

  }.navbar__item{
    margin: 10px 0px;
  }.logomob{
    color: white;
  }
  

`
