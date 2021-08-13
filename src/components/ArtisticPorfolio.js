import React from 'react'
import {Header, Segment, Container} from 'semantic-ui-react'
import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'
import Repertoire from './Repertoire'

export default function ArtisticPortfolio(props){
    const {title, galleryTitle, gallery, videosTitle, videos, repertoireTitle, repertoire} = props.data

    return(
        <div id="Art-Portfolio" className="ArtisticPortfolio full padded-div">
            <Segment vertical>
                <Container>
                    <Header className="main-title" size="huge" textAlign="right">{title}</Header>
                    <PhotoGallery gallery={gallery} galleryTitle={galleryTitle} />
                    <VideoGallery videosTitle={videosTitle} videos={videos} />
                    <Repertoire repertoire={repertoire} repertoireTitle={repertoireTitle}/>
                </Container>
            </Segment>
        </div>
    )
}