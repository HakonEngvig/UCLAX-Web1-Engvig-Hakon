import styled from 'styled-components';

/* Component ---------------------------*/

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
            <Essay question='01: What is the difference between HTML, CSS and JavaScript?'>
                1
            </Essay>
            <Essay question='02: What is the difference between Git and Github?'>
                1
            </Essay>
            <Essay question='03: What is the difference between JQuery and React?'>
                1
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;