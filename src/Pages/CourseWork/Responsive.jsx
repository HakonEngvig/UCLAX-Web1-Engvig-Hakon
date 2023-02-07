import styled from 'styled-components';

/* Meida Query ---------------------------*/

import {useMediaQuery, breakpoints} from '@/Common/useMediaQuery';

const Responsive = () => {

    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveStyled className='Responsive'>
            <h2>Responsive Design</h2>
            <div className="boxes">
                { isMediumAndUp && <div className="box box1">1</div> }

                <div className="box box2">2</div>
                <div className="box box3">3</div>
            </div>

        </ResponsiveStyled>
    );
}

export default Responsive;

const ResponsiveStyled = styled.div`
    @media ${breakpoints.isMediumAndUp} {
        .boxes{
            display: flex;
            justify-content: center;
        }

    }

    .box{
        width: 100%;
        max-width: 200px;
        height: 200px;
        margin: 10px;
        font-size: 50px;
        text-align: center;
        color: #fff;
        background-color: #333;
        line-height: 200px;
        outline: solid 2px #333;
    }
    .box1{
        border-radius: 0px 15px 0px 15px;
    }
    .box3{
        border-radius: 15px 0px 15px 0px;
    }
    @media ${breakpoints.isMediumAndUp} {
        .box{
            outline: solid 2px #84d4d4;
        }
    }
    @media ${breakpoints.isLargeAndUp} {
        .box{
            outline: solid 2px #f26523;
        }
    }
`;