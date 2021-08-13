import React, {useState, useCallback} from 'react'
import {Divider, Modal, Image} from 'semantic-ui-react'
import Gallery from 'react-photo-gallery'
import Slider from 'react-slick'

export default function PhotoGallery(props){
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightBox = useCallback((e, {photo, index}) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    },[])

    const closeLightBox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: currentImage,
        adaptiveHeight: true,
        swipeToSlide: true
    }


    return(
        <div className="PhotoGallery">
            <Divider horizontal>{props.galleryTitle}</Divider>
            <div className="inner">
                <Gallery photos={props.gallery} onClick={openLightBox}/>
                <Modal onClose={closeLightBox} open={viewerIsOpen} closeIcon dimmer="blurring">
                        <Slider {...settings} >
                            {
                                props.gallery.map(function(item, index){
                                    return (
                                        <Image key={index} src={item.src} size="tiny" centered verticalAlign="middle"/>
                                    )
                                })
                            }
                        </Slider>
                </Modal>
            </div>
        </div>
    )
}