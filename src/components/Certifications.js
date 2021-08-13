import React from 'react'
import {Image, Header} from 'semantic-ui-react'

export default function Certification (props){

    return(
        <div className="Certification">
            <Image src={props.src} size="small" centered />
            <Header size="small" textAlign="center">{props.title}</Header>
        </div>
    )
}