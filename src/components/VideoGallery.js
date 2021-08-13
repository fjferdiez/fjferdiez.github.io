import React from 'react'
import { Divider, Embed } from 'semantic-ui-react'
import Slider from 'react-slick'


export default function VideoGallery(props){

    const videoSettings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        initialSlide: Math.floor(Math.random() * props.videos.length)
    }

    return (
        <div className="VideoGallery">
            <Divider horizontal>{props.videosTitle}</Divider>
            <div className="inner">
                <Slider {...videoSettings}>
                    {
                        props.videos.map(function(item){
                            return(
                                <div key={item.id}>
                                    <Embed id={item.id} source={item.source} defaultActive/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}