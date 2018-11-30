import React from 'react';
import { Menu, Container, Segment, Icon } from 'semantic-ui-react';

const MobileNavBar = ({ onSideBarManage }) => {
   return ( <div>
     <Segment
     inverted
     textAlign='center'
     vertical
     >
        <Container>
            <Menu inverted pointing secondary size='large'>
            <Menu.Item onClick={() => onSideBarManage(true)}>
                <Icon name='sidebar' />
            </Menu.Item>
            </Menu>
        </Container>
     </Segment>
     </div>
   )}

export default MobileNavBar;