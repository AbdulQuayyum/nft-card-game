import React from 'react'

import Styles from '../Styles/Index'

const regex = /^[A-Za-z0-9]+$/

const CustomInput = ({ label, placeHolder, value, handleValueChange }) => (
  <>
    <label htmlFor="name" className={Styles.label}>{label}</label>
    <input
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={(e) => {
        if (e.target.value === '' || regex.test(e.target.value)) handleValueChange(e.target.value)
      }}
      className={Styles.input}
    />
  </>
)

export default CustomInput