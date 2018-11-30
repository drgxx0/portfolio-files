import React from 'react'
import { Responsive } from 'semantic-ui-react'

import Aux from '../../hoc/.Aux/Aux'
import HomeContent from './homepagecontent/HomeContent'


const Home = ({ onActiveItem }) => {

    return (
        <Aux>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <HomeContent onActiveItem={onActiveItem} />
            </Responsive>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <HomeContent onActiveItem={onActiveItem} mobile />
            </Responsive>
        </Aux>
    )
}

export default Home