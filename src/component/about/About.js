import React from 'react'
import { Responsive } from 'semantic-ui-react'
import AboutInfo from './aboutInfo/aboutInfo'



const About = (props) => {
    console.log(props)
    return (
    <React.Fragment>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <AboutInfo />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <AboutInfo mobile />
        </Responsive>        
    </React.Fragment>
    )
}

export default About