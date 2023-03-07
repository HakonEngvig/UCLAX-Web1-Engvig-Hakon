import styled from 'styled-components';

/* Components ---------------------------*/
import Tab from './Tab';

const Tablist = ({ curTab, curTabUpdate, tabs }) => {
    return (
        <TablistStyled className='Tablist'>

            {
                tabs.map((tab) => {
                    return <Tab
                            key={ tab.id }
                            tab={ tab }
                            curTab={ curTab }
                            curTabUpdate={ curTabUpdate }
                        />;
                })
            }

        </TablistStyled>
    );
}

export default Tablist;

const TablistStyled = styled.div`

`;