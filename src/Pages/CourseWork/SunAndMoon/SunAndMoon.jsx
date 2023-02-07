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
        <h2>Be Happy! Like this Sun and Moon. <span className="dim">or else...</span></h2>
        <img src={ imgSrc } alt="" onMouseEnter={changeToMoon} onMouseLeave={changeToSun}/>
        {/* <img src={ moonSrc } alt="" /> */}
    </SunAndMoonStyled>
    }

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    text-align: center;

    h2{
        background-color: #333;
        color: #fff;
        padding: 10px;
    }
    .dim{
        opacity: .1;
    }
    img{
        border: solid 20px #84d4d4;
        background-color: #f26523;
        margin: 20px;
        padding: 20px;
        -webkit-transition: all .15s ease-out;
        -moz-transition: all .15s ease-out;
        -o-transition: all .15s ease-out;
        transition: all .15s ease-out;

    }
    img:hover{
        border: solid 20px #84d4d4;
        background-color: #333;
    }

`;