import React from 'react'

import Styles from '../Styles/Index'

const CustomButton = ({ title, handleClick, restStyles }) => (
  <button
    type="button"
    className={`${Styles.btn} ${restStyles}`}
    onClick={handleClick}
  >
    {title}
  </button>
)

export default CustomButton
