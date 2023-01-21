import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Styles from '../Styles/Index'
import { useGlobalContext } from '../Context/Index'
import { CustomButton, PageHOC } from "../Components/Index"

const JoinBattle = () => {

  const navigate = useNavigate()
  const { contract, gameData, setShowAlert, setBattleName, setErrorMessage, walletAddress } = useGlobalContext()

  useEffect(() => {
    if (gameData?.activeBattle?.battleStatus === 1) navigate(`/Battle/${gameData.activeBattle.name}`)
  }, [gameData])

  const handleClick = async (battleName) => {
    setBattleName(battleName)

    try {
      await contract.joinBattle(battleName)

      setShowAlert({ status: true, type: 'success', message: `Joining ${battleName}` })
    } catch (error) {
      setErrorMessage(error)
    }
  }

  return (
    <>
      <h2 className={Styles.joinHeadText}>Available Battles:</h2>

      <div className={Styles.joinContainer}>
        {gameData.pendingBattles.length
          ? gameData.pendingBattles
            .filter((battle) => !battle.players.includes(walletAddress) && battle.battleStatus !== 1)
            .map((battle, index) => (
              <div key={battle.name + index} className={Styles.flexBetween}>
                <p className={Styles.joinBattleTitle}>{index + 1}. {battle.name}</p>
                <CustomButton
                  title="Join"
                  handleClick={() => handleClick(battle.name)}
                />
              </div>
            )) : (
            <p className={Styles.joinLoading}>Reload the page to see new battles</p>
          )}
      </div>

      <p className={Styles.infoText} onClick={() => navigate('/CreateBattle')}>
        Or create a new battle
      </p>
    </>
  )
}

export default PageHOC(
  JoinBattle,
  <>Join <br /> a Battle</>,
  <>Join already existing battles</>,
)