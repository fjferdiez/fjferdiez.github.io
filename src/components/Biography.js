import React from 'react'
import {Header, Grid, Segment, Container, Divider} from 'semantic-ui-react'
import { Parallax } from 'react-scroll-parallax'

export default function Biography(props){
    const {musicianTitle, musicianParagraphs, coderTitle, coderParagraphs} = props.data

    return (
        <div id="Biography" className="Biography padded-div">
            <Segment vertical>
                <Container>
                    <Parallax x={[10,-10]}>
                    <Grid columns='equal' doubling stackable>
                        <Grid.Row>
                            <Grid.Column width="16">
                                <Header className="main-title" size="huge" textAlign="left">Biography</Header>    
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} id="music-bio">
                                <div id="music-bio-content">
                                    <Divider horizontal>{musicianTitle}</Divider>
                                    {musicianParagraphs.map((item, index) => {
                                        return <p key={index}>{item}</p>
                                    })}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8} id="code-bio">
                                <div id="code-bio-content">
                                    <Divider horizontal>{coderTitle}</Divider>
                                    {coderParagraphs.map((item, index) => {
                                        return <p key={index}>{item}</p>
                                    })}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Parallax>
                </Container>
            </Segment>
        </div>
    )
}