import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';
import Slideshow from './Slideshow/Slideshow';
import YouTube from './YouTube/YouTube';
import Tabbed from './Tabbed/Tabbed';

const Home = () => {
    return (
        <HomeStyled className='Home'>
            <h1>Home</h1>
            <Slideshow />
            <YouTube />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    h1{
        display: none;
    }
`;
