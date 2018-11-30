import React from 'react'
import { Segment, Grid, Image, Header } from 'semantic-ui-react'
import profile from '../../assets/img/profile.jpg'
import header from '../../assets/img/head.jpg'



const AboutInfo = ({ mobile }) => {
    return (
        <Segment inverted vertical style={{background: `linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(${header}) center center no-repeat`,
            backgroundSize: "cover", height: '80vh'}}>
            <Grid columns={mobile? 1 : 2} centered >
                <Grid.Column verticalAlign='middle'>
                <Segment style={{marginTop: mobile ? '5em' : '10em'}}>
                    <div 
                        style={{display: 'grid', justifyContent: 'center'}}>
                        <Image 
                        src={profile} 
                        size={mobile ? 'tiny' : 'small'} 
                        circular /></div>
                        <Grid.Row>
                            <Header as='h2' style={{marginTop: '1em'}}>Alejandro Fuenmayor</Header>
                            <Header.Content>Full Stack Web Developer with high knowledge in: ReactJs, Redux/Saga, NodeJs, ExpressJs, Mysql and Postgresql</Header.Content>
                        </Grid.Row>
                    
                </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default AboutInfo