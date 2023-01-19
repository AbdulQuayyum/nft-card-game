import React from 'react'

import Styles from '../Styles/Index'

const ActionButton = ({ imgUrl, handleClick, restStyles }) => (
  <div
    className={`${Styles.gameMoveBox} ${Styles.flexCenter} ${Styles.glassEffect} ${restStyles} `}
    onClick={handleClick}
  >
    <img src={imgUrl} alt="action_img" className={Styles.gameMoveIcon} />
  </div>
)

export default ActionButton
