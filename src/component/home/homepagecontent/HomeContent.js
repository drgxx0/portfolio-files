import React from 'react'
import { Header, Container, Segment, Button, Icon, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import header from '../../assets/img/head.jpg'

const HomeContent = ({ mobile, onActiveItem }) => {
    return (
    <Segment
    inverted
    vertical
    style={{background: `linear-gradient(to bottom, rgba(62, 62, 62, 0.75) 0%, rgba(62, 62, 62, 0.75) 100%), url(${header}) center center no-repeat`,
            backgroundSize: "cover", height: mobile ? '80vh' : ''}}
    >   
        <Container text>
        <Header
            as='h2'
            content='Full-Stack Web Developer'
            style={{
                color: '#fff',
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '2em' : '3em',
            }}
            />
        <Header
            as='h3'
            content='React+Redux Frontend / Nodejs+Expressjs Backend'
            style={{
                color: '#fff',
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '1em' : '1.5em',
        }}
        />
                <Grid centered padded>
                    <Button onClick={() => onActiveItem('projects')} as={NavLink} to="/projects" primary size='huge' style={{
                        marginBottom: mobile ? '2em' : '9em',
                        marginTop: mobile ? '3em' : ''
                    }}>
                    Projects
                    <Icon name='right arrow' />
                    </Button>
                </Grid>
        </Container>
    </Segment>
    )}

HomeContent.propTypes = {
    mobile: PropTypes.bool
}
export default HomeContent