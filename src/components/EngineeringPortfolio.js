import React from 'react'
import {Header, Container, Segment, Divider, Grid} from 'semantic-ui-react'
import AnimatedProgress from './AnimatedProgress'
import Certification from './Certifications'


export default function EngineeringPortfolio (props){
    const {languages, toolsFrameworks, certifications, education} = props.data

    return(
        <div id="Engineering-Portfolio" className="EngineeringPortfolio padded-div">
            <Segment vertical>
                <Container>
                    <Header className="main-title" size="huge" textAlign="left">Engineering</Header>
                    <Divider horizontal>Education & Certifications</Divider>
                    <div className="inner">
                        <Grid columns={4} doubling stackable centered>
                            {
                                certifications.map(function(item){
                                    return(
                                    <Grid.Column key={item.id}>
                                        <Certification src={item.src} title={item.title} />
                                    </Grid.Column>  
                                    )
                                })
                            }
                            {
                                education.map(function(item){
                                    return(
                                    <Grid.Column key={item.id} verticalAlign="middle">
                                        <Certification src={item.src} title={item.title} />
                                    </Grid.Column>  
                                    )
                                })
                            }
                        </Grid>
                    </div>
                    <Divider horizontal>Skills self-assessment</Divider>
                    <div className="inner">
                        {
                            languages.map(function(item){
                                return(
                                    <AnimatedProgress key={item.id} percent={item.percentage} size="small" color={item.color} title={item.title} />
                                )
                            })
                        }
                        <br/>
                        {
                            toolsFrameworks.map(function(item){
                                return(
                                    <AnimatedProgress key={item.id} percent={item.percentage} size="small" color={item.color} title={item.title} />
                                )
                            })
                        }
                    </div>
                </Container>
            </Segment>
        </div>
    )
}