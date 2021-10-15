import { useContext } from 'react';
import styled from 'styled-components'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {useMediaQuery} from '@material-ui/core'

const SocialMediaGroup = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:150px;
margin-right: ${ ({marginRight}) => marginRight };
transform: scale(0.8);
`

const SocialMediaLinksGroup = ({darkTheme}) => {
    const maxWidth900px = useMediaQuery("(max-width:900px)");
    return (
        <SocialMediaGroup marginRight = {maxWidth900px ? "0" : "20px" }>
                           <a href="https://www.instagram.com/activefm777/" > <InstagramIcon style = {{color: darkTheme ? '#fff' : "#111" }}/> </a>
                           <a href="https://www.youtube.com/channel/UChNIUx19XJrIOm5UGYAqkYQ" > <YouTubeIcon style = {{color: darkTheme ? '#fff' : "#111"}}/> </a>
                           <a href="https://www.facebook.com/activefm777" > <FacebookIcon style = {{color: darkTheme ? '#fff' : "#111"}}/> </a>

                           <a href="https://open.spotify.com/show/7IqUjTiAg6jS1tgLcRL6ag" >
                                <img src = "./spotify-logo.svg"
                                  alt="spotify icon"
                                  style = {{
                                    width:35,
                                    height:35,
                                    objectFit:'contain',
                                    objectPosition:'center',
                                    filter: darkTheme ? 'invert(100%)' : 'invert(0)'
                                }}
                                /> 
                           </a>

                           <a href="https://podcasts.apple.com/za/podcast/we-are-live/id1478735597" >
                                <img src = "./podcast.png"
                                  alt="spotify icon"
                                  style = {{
                                    width:20,
                                    height:20,
                                    objectFit:'contain',
                                    objectPosition:'center',
                                    filter: darkTheme ? 'invert(100%)' : 'invert(0)'
                                }}
                                /> 
                           </a>

           </SocialMediaGroup>
    )
}

export default SocialMediaLinksGroup
