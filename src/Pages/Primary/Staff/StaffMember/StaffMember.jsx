import styled from 'styled-components';

/* Components ---------------------------*/
import StaffBio from './StaffBio';

const StaffMember = ({member}) => {
    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ `Do Whatever you want ${member.name} after` } />
            <h3>{ member.name }</h3>
            <StaffBio member={ member } />
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    /* border: solid 1px red;
    padding: 10px;
    margin: 10px; */
    background-color: #eee;

    img{
        width: 100%;
        display: block;
    }

    h3{
        font-size: 20px;
        background-color: #333;
        color: #fff;
        margin: 0px;
        padding: 5px 10px;
        text-align: center;
    }
`;