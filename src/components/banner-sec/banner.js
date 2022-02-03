import React from 'react'
import './banner.scss'
import BannerPhoto from '../../gallery/NewAssessment.png'

function BannerCard () {
    return(
        <div className="banner-Box">
          <img src={BannerPhoto} alt="banner-img"></img>

      </div>
    )
}

export default BannerCard;