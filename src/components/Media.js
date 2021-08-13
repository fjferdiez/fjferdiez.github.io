import {createMedia} from '@artsy/fresnel'
import data from '../data/data'

const AppMedia = createMedia(data.media)

export const mediaStyles = AppMedia.createMediaStyle()
export const {Media, MediaContextProvider} = AppMedia