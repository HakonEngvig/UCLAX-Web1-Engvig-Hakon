import styled from 'styled-components';

/* Media Query ---------------------------*/
import { breakpoints } from '@/Common/useMediaQuery';

const TabContent = ({curTab}) => {
    return (
        <TabContentStyled className='TabContent'>
            <div className='col1'>
                <img src={ curTab.image } alt={ curTab.title } />
            </div>
            <div className='col2'>
                <h3>{ curTab.title }</h3>
                <div dangerouslySetInnerHTML={ {__html:curTab.text } } />
            </div>


        </TabContentStyled>
    );
}

export default TabContent;

const TabContentStyled = styled.div`
    padding: 10px;
    background-color: #333;

    @media ${ breakpoints.isMediumAndUp }{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    .col1{
        img{
            display: block;
            max-width: 100%;
            margin: 0px auto 15px
        }
    }

    .col2{
        h3{
            font-size: 30px;
            color: #f26523;
        }
        h4{
            font-size: 25px;
            color: #fff;
        }

        p{
            font-size: 16px;
            line-height: 180%;
            color: #eee;
            margin-bottom: 20px;

        }
        li{
            font-size: 16px;
            line-height: 180%;
            color: #eee;
            margin-bottom: 0px;

        }
    }
`;