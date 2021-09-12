import React from 'react'
import Welcome from './components/Welcome'
import Biography from './components/Biography'
import ArtisticPortfolio from './components/ArtisticPorfolio'
import MainMenu from './components/MainMenu'
import data from './data/data'
import EngineeringPortfolio from './components/EngineeringPortfolio'
import Contact from './components/Contact'
import { MediaContextProvider } from './components/Media'
import { ParallaxProvider } from 'react-scroll-parallax'
export default class App extends React.Component{

  render(){

    return(
      <ParallaxProvider>
      <div className="App">
        <MediaContextProvider>
          <MainMenu>
            <Welcome data={data.welcome} />
            <Biography data={data.biography}/>
            <ArtisticPortfolio data={data.artisticSkills} />
            <EngineeringPortfolio data={data.techSkills} />
            <Contact />
          </MainMenu>
        </MediaContextProvider>
      </div>
      </ParallaxProvider>
    )
  }
}