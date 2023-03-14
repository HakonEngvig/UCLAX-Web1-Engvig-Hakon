import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';
import StaffList from './StaffList';

const Staff = () => {
    return (
        <StaffStyled className='Staff'>
            <Inset>
                <h1>Staff</h1>
                <StaffList />
                <p className='push'><i>All images shown were provided to Håkon with consent... all except for the photo of Mitch.</i></p>
                <p><i>This build was meant as a surprise for Mitch so it was a bit difficult to ask directly. However, the image used for him was available on his site online.</i></p>

            </Inset>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    p{
        text-align: center;
        color: #999
    }
    .push{
        margin-top: 20px;
    }

`;