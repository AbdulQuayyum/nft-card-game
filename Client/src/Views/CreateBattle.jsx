import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Styles from '../Styles/Index'
import { CustomButton, CustomInput, GameLoad, PageHOC } from "../Components/Index"
import { useGlobalContext } from '../Context/Index'

const CreateBattle = () => {
  const [waitBattle, setWaitBattle] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <p className={Styles.infoText} onClick={() => navigate('/JoinBattle')}>
        Or join already existing battles
      </p>
    </>
  )
}

export default PageHOC(
  CreateBattle,
  <>Create <br /> a new Battle</>,
  <>Create your own battle and wait for other players to join you</>,
)