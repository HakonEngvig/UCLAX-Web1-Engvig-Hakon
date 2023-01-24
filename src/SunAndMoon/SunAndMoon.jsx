import { useState } from 'react';

import styled from 'styled-components'

import sunSrc from './images/sun.png'
import moonSrc from './images/moon.png'

const SunAndMoon = () => {

    //JAVASCRIPT

    const [imgSrc, imgSrcUpdater] = useState(sunSrc);

    const changeToMoon = () => {
        // console.log('Moon');
        imgSrcUpdater(moonSrc);
    }
    const changeToSun = () => {
        // console.log('Sun');
        imgSrcUpdater(sunSrc);
    }

    //HTML
    return<SunAndMoonStyled>
        <h2>Sun and Moon - Whatever</h2>
        <img src={ imgSrc } alt="" onMouseEnter={changeToMoon} onMouseLeave={changeToSun}/>
        {/* <img src={ moonSrc } alt="" /> */}
    </SunAndMoonStyled>
    }

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    text-align: center;

    h2{
        background-color: teal;
        color: #fff;
        padding: 10px;
    }
    img{
        border: solid 20px teal;
        background-color: #004f4f;
        margin: 20px;
        padding: 20px;

    }

`;