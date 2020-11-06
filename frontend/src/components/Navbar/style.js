import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { NavbarToggler } from 'reactstrap'

export const Navbar = styled.nav`
    background-color: gray;
    @media (max-width: 600px){
    display: none;

    }
    .logo{
      color: white;
      font-size: 18px;
      position: relative;
        right: -92px;
      @media (min-with: 600px){
        font-size: 25px; 
    }
    }
    }.searchbar{
      margin: 0px 10px;
    }
`

export const NavbarTogglers = styled(NavbarToggler)`
  border-color: white;
  border-width: 3px;
  padding: 0px 3px;
  color: white;
  background-color: white;
  
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
export const Hr = styled.hr`
  @media only screen and (min-width: 600px) {
    display: none;
    margin: 0px -4px;
    color: #8b4513;
   
}
`
export const Nav = styled.ul`
  list-style-type: none;
  color: white;
  font-size: 29px;
  position: relative;
  top: -6px;
  left: -36px;
  @media only screen and (min-width: 600px) {
   margin-left: 0auto;
   margin-right: 0auto;
   font-size: 16px;
  .nav__list{
    margin:      0px 25px;
    display:     inline;
   @media only screen and (max-width: 600px) {
   font-size:   30px;
   color:       white;
   display:     table;
  }.nav__list__item{
    color: white;
    :hover {
    color: grey;
  }
}
`