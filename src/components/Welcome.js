import React, {useEffect, useState} from 'react'
import {Header, Grid, Transition} from 'semantic-ui-react'
import { Parallax } from 'react-scroll-parallax'

export default function Welcome(props) {
    const {title, name} = props.data
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        setVisibility(true)
    }, [])

    return (
        <div id="Welcome" className="Welcome full">
            <Grid className="full" columns={'equal'} centered>
                <Grid.Row verticalAlign="middle">
                    <Grid.Column verticalAlign="bottom" width={16}>
                        <Transition duration={5000} visible={visibility} animation='fade'>
                            <Parallax id="myIntro" x={[-6, 20]} tagOuter='div'>
                                <Header inverted size="large" textAlign="center">{title}</Header>
                                <br />
                                <Header inverted size="huge" textAlign="center" className="name">{name}</Header>
                                <br />
                            </Parallax>
                        </Transition>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}