import styled from 'styled-components';

/* Components ---------------------------*/
import Slidelist from './Slidelist';

const Slideshow = () => {
    return (
        <SlideshowStyled className='Slideshow'>
            Slideshow
            <Slidelist />
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

`;