import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

export const Location = styled.section`
    height: 800px;
    .location__uno{
        list-style-type: none;
    }.location__title{
        text-align: center;
        font-size: 38px;
    }.location__description{
        font-size: 19px;
        text-align: center;
        margin-top: 80px
    }.addres{
        margin-top: 80px

    }.frame__position{
        display: none;
        border: none;
        border-radius: 12px;
        @media (min-width: 600px) {
            height: 400px;
            width: 400px;
            margin: 40px  0px;
            
        }
    }

`
export const HomeIcons = styled(HomeIcon)`


`
export const PhoneIcons = styled(PhoneIcon)`

`
export const EmailIcons = styled(EmailIcon)`


`