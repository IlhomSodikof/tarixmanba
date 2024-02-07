import React from 'react'
import MiniCard from '../components/MiniCard'

export default function AxYodgorliklarHome() {
  return (
    <>
      <div className='shtamp-container'>
        <div className='title-shtamp'>
          <h2 >Arxeologik yodgorliklar<span>BARCHASI</span></h2>
        </div>
        <div className="title-shtamp-card">
          {[1].map((item) =>
            <MiniCard />
          )}
        </div>
      </div >
    </>
  )
}
