import React from 'react'
import {Progress, Transition} from 'semantic-ui-react'
import handleViewport from 'react-in-viewport'

const Progreso = (props) => {
    const {enterCount, forwardedRef, inViewport} = props
    const isVisible = (enterCount>0 || inViewport)
    return(
        <div ref={forwardedRef}>
        <Transition visible={isVisible} animation={'slide right'} duration={1000}>
            <Progress percent={props.percent} size={props.size} progress>{props.title}</Progress>
        </Transition>
        </div>
    )
}

const ViewportProgress = handleViewport(Progreso)

export default function AnimatedProgress(props){

    return(
        <div className="AnimatedProgress">
            <ViewportProgress percent={props.percent} size={props.size} color={props.color} title={props.title}></ViewportProgress>
        </div>
    )
}