import React from 'react'
import { Card, Segment, Image } from 'semantic-ui-react'

import Aux from '../../hoc/.Aux/Aux'

import header from '../assets/img/head.jpg'
import cssGradientGenerator from '../assets/img/cssgradientgenerator.jpg'
import roboFriends from '../assets/img/robofriends.jpg'
import faceApp from '../assets/img/faceapp.jpg'
import learnkorean from '../assets/img/learnkorean.jpg'


const Projects = () => {
    return (
    <Aux>
        <Segment inverted vertical style={{background: `linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(${header}) center center no-repeat`,
            backgroundSize: "cover"}}>
            <Card.Group itemsPerRow={2} centered stackable doubling style={{margin: '5px'}}>
                <Card href='https://drgxx0.github.io/cssgradientgenerator.github.io/'>
                    <Image src={cssGradientGenerator} size='huge' />
                    <Card.Content>
                    <Card.Header>Css Gradient Generator</Card.Header>
                    <Card.Description>A fun project with CSS3 and JavaScript that provides a powerfull design tool</Card.Description>
                    </Card.Content>
                </Card>
                <Card href='https://drgxx0.github.io/robofriendsapp/'>
                    <Image src={roboFriends} size='huge' />
                    <Card.Content>
                    <Card.Header>RoboFriends</Card.Header>
                    <Card.Description>Web App in Reactjs, Responsive, and connected to an API</Card.Description>
                    </Card.Content>
                </Card>
                <Card href='https://smart-app-face.herokuapp.com/'>
                    <Image src={faceApp} size='huge' />
                    <Card.Content>
                    <Card.Header>FaceApp</Card.Header>
                    <Card.Description>Advanced Web App with signin and signup forms connected to a server develop in Nodejs+ExpressJs and that store data in a Postgresql's database. Also It's connected to an API to Face recognition</Card.Description>
                    </Card.Content>
                </Card>
                <Card href='https://drgxx0.github.io/learnkorean/'>
                    <Image src={learnkorean} size='huge' />
                    <Card.Content>
                    <Card.Header>Learn Korean</Card.Header>
                    <Card.Description>Web App to education that show a simple single page with a singup and signin form, this project was made with ReactJs+Redux and It's connected to a NodeJs+ExpressJs server made by me too</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Segment>
    </Aux>
    )
}

export default Projects