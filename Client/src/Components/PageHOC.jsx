import React from 'react'
import { useNavigate } from "react-router-dom"

import Alert from './Alert'
import { useGlobalContext } from '../Context/Index'
import { Logo2, heroImg } from "../Assets/Index"
import Styles from '../Styles/Index'

const PageHOC = (Component, title, description) => () => {
  const { showAlert } = useGlobalContext()
  const navigate = useNavigate()
  return (
    <div className={Styles.hocContainer}>
      {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}

      <div className={Styles.hocContentBox}>
        <img src={Logo2} alt="logo" className={Styles.hocLogo} onClick={() => navigate('/')} />

        <div className={Styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${Styles.headText} head-text`}>{title}</h1>
          </div>

          <p className={`${Styles.normalText} my-10`}>{description}</p>

          <Component />
        </div>

        <p className={Styles.footerText}>Made with 🖤 by Abdul-Quayyum Alao</p>
      </div>

      <div className="flex flex-1">
        <img src={heroImg} alt="hero-img" className="w-full xl:h-full object-cover" />
      </div>
    </div>
  )
}

export default PageHOC