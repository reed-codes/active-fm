import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const BannerSlider = ()=>{

    return (
               <>
        <Carousel axis = "vertical"
                  autoPlay = {true}
                  centerMode = {true}
                  infiniteLoop  = {true}
                  showThumbs  = {false}
                  interval = {3000}
                  style = {{
                      width:'100%',
                      background : 'deeppink'
                  }}
                  showArrows = {false}
                  showIndicators = {false}
                  stopOnHover = {false}
                  >
                            <div style  = {{
                                 height : 'auto',
                                 width:'100%',
                             }}>
                                 <img src = {{
                                     width:'100%',
                                     objectFit : 'cover',
                                     objectPosition:'center'
                                 }}
                                  src = "./img/Banner 1.jpg"
                                  alt = ""
                                 />
                             </div>

                            <div style  = {{
                                 height : 'auto',
                                 width:'100%',
                             }}>
                                 <img src = {{
                                     width:'100%',
                                     objectFit : 'cover',
                                     objectPosition:'center'
                                 }}
                                  src = "./img/Banner 2.jpg"
                                  alt = ""
                                 />
                             </div>
                             
                            <div style  = {{
                                 height : 'auto',
                                 width:'100%',
                             }}>
                                 <img src = {{
                                     width:'100%',
                                     objectFit : 'cover',
                                     objectPosition:'center'
                                 }}
                                  src = "./img/Banner 3.jpg"
                                  alt = ""
                                 />
                             </div>

            </Carousel>
               </>
    )
} 

export default BannerSlider