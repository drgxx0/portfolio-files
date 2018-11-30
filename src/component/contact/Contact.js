import React from 'react'
import { Segment, Header, Container, Grid, Icon } from 'semantic-ui-react'
import header from '../assets/img/head.jpg'



const Contact = () => {
    return (
        <Segment inverted vertical style={{background: `linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(${header}) center center no-repeat`,
            backgroundSize: "cover", height: '80vh'}}>
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={10}>
                        <Segment>
                            <Container textAlign='center'>
                                <Header as='h1' content='Contact me' />
                            </Container >
                            <Container textAlign='center' style={{marginTop: '2em'}}>
                                <Icon name='mail' size='big' />alejandroff91@gmail.com<br />
                                <Icon name='github' size='big' />https://github.com/drgxx0
                            </Container >
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Contact