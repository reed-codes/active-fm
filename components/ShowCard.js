import { useContext } from 'react'
import styled from 'styled-components'
import {ThemeContext} from '../state/ThemeProvider'
import {trim} from '../utils'

const ShowCardWrapper = styled.a`
width:200px;
min-width:200px;
margin-bottom:30px;
transition: all .3s;
padding:10px;
background : rgba(0,0,0,.05);
color:#ddd;
cursor:pointer;
&:hover{
    color : #aa2329;
    background : rgba(0,0,0,.3)
}
`
const ShowCardTitle = styled.div`
   color : ${ ( {darkMode} ) => darkMode ? '#fff' : '#111'};
`
const ShowCardDescription = styled.div`
   color : ${ ( {darkMode} ) => darkMode ? '#eee' : '#111' };
   font-size : 13px;
   opacity :.5
`

export const ShowCard = ({show})=>{
    const {theme, setTheme} = useContext(ThemeContext);
    const darkMode = Boolean(theme == "dark")


    return (
       <ShowCardWrapper href= {show.link}>
                   <img style = {{
                       height:160,
                       width:'100%',
                       marginBottom:10,
                       objectFit:'cover'
                   }}
                   src = {`/img/${show.img}`}
                   alt = {show.name}
                   />
      
                   <ShowCardTitle darkMode = {darkMode}>
                       { show.name }
                   </ShowCardTitle>

                   <ShowCardDescription theme = {theme} darkMode = {darkMode}>  
                       { trim(show.description) }
                  </ShowCardDescription> 
       </ShowCardWrapper> 
    )

}

export default ShowCard