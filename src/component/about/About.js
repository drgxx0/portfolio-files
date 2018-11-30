import React from 'react'
import { Responsive } from 'semantic-ui-react'
import AboutInfo from './aboutInfo/aboutInfo'


import Aux from '../../hoc/.Aux/Aux'


const About = (props) => {
    console.log(props)
    return (
    <Aux>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <AboutInfo />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <AboutInfo mobile />
        </Responsive>        
    </Aux>
    )
}

export default About