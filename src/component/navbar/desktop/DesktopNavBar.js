import React from 'react';
import { Menu, Container, Segment } from 'semantic-ui-react';


import NavBarItems from '../navbaritems/NavBarItems'

const DesktopNavBar = ({ onHandleActiveItem, activeItem }) => {

    return (
        <Segment
        inverted
        textAlign='center'
        vertical
        >
            <Menu
            fixed={null}
            inverted
            pointing
            secondary
            size='large'
            >
            <Container>
                <NavBarItems device='desktop' onHandleActiveItem={onHandleActiveItem} activeItem={activeItem} />
            </Container>
            </Menu>
        </Segment>
)}

export default DesktopNavBar;