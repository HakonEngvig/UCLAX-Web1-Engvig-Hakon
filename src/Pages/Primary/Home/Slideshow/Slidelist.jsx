import styled from 'styled-components';

/* React Carousel (third party library) ---------------------------*/
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Data ---------------------------*/
import { slidesData } from './slidesData';

/* Components ---------------------------*/
import Slide from './Slide';

const Slidelist = () => {
    return (
        <SlidelistStyled className='Slidelist'>
            <Carousel>
            {
                slidesData.map((slide) => {
                    return <Slide key={ slide.id } slide={ slide } />;
                })
            }
            </Carousel>
        </SlidelistStyled>
    );
}

export default Slidelist;

const SlidelistStyled = styled.div`
    .carousel .control-dots .dot{
        background:#84d4d4;
    }

`;