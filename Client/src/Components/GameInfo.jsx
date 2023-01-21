import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CustomButton from './CustomButton'
import Styles from '../Styles/Index'
import { useGlobalContext } from '../Context/Index'
import { alertIcon, gameRules } from '../Assets/Index'

const GameInfo = () => {
  const { contract, gameData, setErrorMessage, setShowAlert } = useGlobalContext()
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const navigate = useNavigate()

  const handleBattleExit = async () => {
    const battleName = gameData.activeBattle.name

    try {
      await contract.quitBattle(battleName)

      setShowAlert({ status: true, type: 'info', message: `You're quitting the ${battleName}` })
    } catch (error) {
      setErrorMessage(error)
    }
  }

  return (
    <>
      <div className={Styles.gameInfoIconBox}>
        <div
          className={`${Styles.gameInfoIcon} ${Styles.flexCenter}`}
          onClick={() => setToggleSidebar(true)}
        >
          <img
            src={alertIcon}
            alt="info"
            className={Styles.gameInfoIconImg}
          />
        </div>
      </div>

      <div className={`${Styles.gameInfoSidebar} ${toggleSidebar ? 'translate-x-0' : 'translate-x-full'} ${Styles.glassEffect} ${Styles.flexBetween} backdrop-blur-3xl`}>
        <div className="flex flex-col">
          <div className={Styles.gameInfoSidebarCloseBox}>
            <div
              className={`${Styles.flexCenter} ${Styles.gameInfoSidebarClose}`}
              onClick={() => setToggleSidebar(false)}
            >
              X
            </div>
          </div>

          <h3 className={Styles.gameInfoHeading}>Game Rules:</h3>

          <div className="mt-3">
            {gameRules.map((rule, index) => (
              <p key={`game-rule-${index}`} className={Styles.gameInfoText}>
                <span className="font-bold">{index + 1}</span>. {rule}
              </p>
            ))}
          </div>
        </div>

        <div className={`${Styles.flexBetween} mt-10 gap-4 w-full`}>
          <CustomButton title="Change Battleground" handleClick={() => navigate('/battleground')} />
          <CustomButton title="Exit Battle" handleClick={() => handleBattleExit()} />
        </div>
      </div>
    </>
  )
}

export default GameInfo