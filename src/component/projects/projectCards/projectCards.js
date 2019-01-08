import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import cssGradientGenerator from 'component/assets/img/cssgradientgenerator.jpg'
import roboFriends from 'component/assets/img/robofriends.jpg'
import faceApp from 'component/assets/img/faceapp.jpg'
import ecommerce from 'component/assets/img/basic-ecommerce.jpg'
import expenseTracker from 'component/assets/img/expense.jpg'
import quote from 'component/assets/img/quote.jpg'
import pig from 'component/assets/img/pig.jpg'

const ProjectCards = () => {

    const projects = [
        {head: 'Css Gradient Generator', 
        src: cssGradientGenerator, 
        href: 'https://drgxx0.github.io/cssgradientgenerator.github.io/', 
        desc: 'A fun project with CSS3 and JavaScript that provides a powerfull design tool'},
        {head: 'RoboFriends', 
        src: roboFriends, 
        href: 'https://drgxx0.github.io/robofriendsapp/', 
        desc: 'Web App in Reactjs, Responsive, and connected to an API'},
        {head: 'FaceApp', 
        src: faceApp, 
        href: 'https://smart-app-face.herokuapp.com/', 
        desc: `Advanced Web App with signin and signup forms connected to a server develop in Nodejs+ExpressJs and that store data in a Postgresql's database. Also It's connected to an API to Face recognition`},
        {head: 'Basic Ecommerce', 
        src: ecommerce, 
        href: 'http://basic-ecommerce.s3-website.us-east-2.amazonaws.com/', 
        desc: `ReactJS web App to a basic ecommerce, manage state with Redux and side effect with Saga. It have Auth0 integration to manage login and signup request and it's connected to API Gateway from AWS and manage with Lambda functions`},
        {head: 'Expense Tracker', 
        src: expenseTracker, 
        href: 'https://drgxx0.github.io/expense-tracker/', 
        desc: 'App web to track your expenses, show your actual funds, log your expenses and it have and graph to keep record in the most easy way. Make wiht ReactJs+Redux. Username: test Password: 1234'},
        {head: 'Random Quote Machine',
        src: quote,
        href: 'https://drgxx0.github.io/random_quote_machine/',
        desc: 'App web to generate random quotes. Make with ReactJs+Redux/Saga'},
        {head: 'Pig Game',
        src: pig,
        href: 'https://drgxx0.github.io/pig-game/',
        desc: 'A fun pig game make with ReactJs+Redux. Using new hooks from v16.7.0-alpha.2'}
    ]

    const projectsMap = projects.map(items => {
        return (
        <Card href={items.href}>
            <Image src={items.src} size='huge' />
            <Card.Content>
            <Card.Header>{items.head}</Card.Header>
            <Card.Description>{items.desc}</Card.Description>
            </Card.Content>
        </Card>
        )
    })

    return (
        <React.Fragment>
            {projectsMap}
        </React.Fragment>
    )
}

export default ProjectCards