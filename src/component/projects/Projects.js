import React from 'react'
import { Card, Segment } from 'semantic-ui-react'

import ProjectCards from './projectCards/projectCards'

import header from 'component/assets/img/head.jpg'



const Projects = () => {
    return (
    <React.Fragment>
        <Segment inverted vertical style={{background: `linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(${header}) center center no-repeat`,
            backgroundSize: "cover"}}>
            <Card.Group itemsPerRow={2} centered stackable doubling style={{margin: '5px'}}>
                <ProjectCards />
            </Card.Group>
        </Segment>
    </React.Fragment>
    )
}

export default Projects