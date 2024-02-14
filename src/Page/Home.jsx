import React from 'react'
import MatbuotHome from '../Components/Home/MatbuotHome'
import Map from '../Components/Home/Map'
import HomeLoader from '../Components/components/HomeLoader'
import MiniSpin from '../Components/components/miniSpin'
import Shtamp from '../Components/Home/Shtamp'
import AxYodgorliklarHome from '../Components/Home/AxYodgorliklarHome'
import GlobeComponent from '../Components/Home/GlobeComponent'

export default function Home() {
  return (
    <>
      <main>
        <GlobeComponent />
        <Shtamp />
        <MatbuotHome />
        <AxYodgorliklarHome />
        {/* <MiniSpin />
        <HomeLoader /> */}

      </main>
    </>
  )
}
