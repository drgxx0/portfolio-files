import React from 'react'
import { Responsive } from 'semantic-ui-react'

import HomeContent from './homepagecontent/HomeContent'


const Home = ({ onActiveItem }) => {

    return (
        <React.Fragment>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <HomeContent onActiveItem={onActiveItem} />
            </Responsive>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <HomeContent onActiveItem={onActiveItem} mobile />
            </Responsive>
        </React.Fragment>
    )
}

export default Home