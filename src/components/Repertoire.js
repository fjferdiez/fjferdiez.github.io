import React from 'react'
import {Grid, Divider} from 'semantic-ui-react'
import Composer from './Composer'

export default function Repertoire (props){
    const {repertoire, repertoireTitle} = props
    return(
        <div className="Repertoire">
            <Divider horizontal>{repertoireTitle}</Divider>
            <div className="inner">
                <Grid columns={3} doubling stackable>
                    {
                        repertoire.map((item)=>{
                            return <Grid.Column key={item.id}>
                                <Composer data={item} />
                                </Grid.Column>
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}