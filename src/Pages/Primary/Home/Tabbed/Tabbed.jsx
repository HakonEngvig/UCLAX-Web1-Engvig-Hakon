import { useState } from 'react';
import styled from 'styled-components';

/* Data ---------------------------*/
import { tabbedData } from './tabbedData';

/* Components ---------------------------*/
import Tablist from './Tabs/Tablist';
import TabContent from './TabContent';

const Tabbed = () => {

    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled className='Tabbed'>
            <Tablist curTab={ curTab } curTabUpdate={ curTabUpdate } tabs={ tabbedData }/>
            <TabContent curTab={ curTab } />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`

`;