import React from 'react'
import { useNavigate }  from "react-router-dom"

import { Logo2, heroImg } from "../Assets/Index"
import styles from '../Styles/Index'

const PageHOC = (Component, title, description) => () => {
    // const { showAlert } = useGlobalContext();
    const navigate = useNavigate();
  return (
    <div>PageHOC</div>
  )
}

export default PageHOC