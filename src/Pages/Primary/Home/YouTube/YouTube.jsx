import styled from 'styled-components';

/* YouTube Components ---------------------------*/

import React from 'react';
import ReactYouTube from 'react-youtube';

/* Meida Query ---------------------------*/
import {useMediaQuery, breakpoints} from '@/Common/useMediaQuery';

const YouTube = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <YouTubeStyled className='YouTube'>
            <h1>Web Design I: HTML, CSS and JavaScript</h1>
            <p>Here is some <strong>HEAVY METAL</strong> to get your motivated to code</p>
            <p>It's also oddly therapeutic for when you get frustrated</p>
            <ReactYouTube className='myVideo' videoId="dat_ubBlBYY" opts={opts} />;
        </YouTubeStyled>
    );
}

export default YouTube;

const YouTubeStyled = styled.div`
    &.YouTube h1 {
        display: block
    }
    p{
        text-align: center;
    }
    .myVideo iframe{
        width: 95%;
        height: 400px;
        margin: 20px auto;
        display: block;
    }
    @media ${breakpoints.isMediumAndUp} {
        .myVideo iframe{
            width: 80%;
            height: 500px;
        }
    }
    @media ${breakpoints.isLargeAndUp} {
        .myVideo iframe{
            width: 80%;
            height: 600px;
        }
    }
`;