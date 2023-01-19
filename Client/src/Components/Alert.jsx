import React from 'react'

import { AlertIcon } from '../Assets/Index'
import Styles from '../Styles/Index'

const Alert = ({ type, message }) => (
  <div className={`${Styles.alertContainer} ${Styles.flexCenter}`}>
    <div className={`${Styles.alertWrapper} ${Styles[type]}`} role="alert">
      <AlertIcon type={type} /> {message}
    </div>
  </div>
)

export default Alert
